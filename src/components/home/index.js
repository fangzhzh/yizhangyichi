import React from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import firestore from 'firebase/firestore';
import TodoPage from 'containers/todo';
import PropTypes from 'prop-types';
import 'components/home/home.css';

const {
  Header, Footer, Content, Sider,
} = Layout;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // Set the default state of our application
    this.state = { addingTodo: false, pendingTodo: '', todos: [] };
    // We want event handlers to share this context
    this.addTodo = this.addTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    // We listen for live changes to our todos collection in Firebase
    firestore.collection(this.props.todoPath).onSnapshot((snapshot) => {
      const todos = [];
      snapshot.forEach((doc) => {
        const todo = doc.data();
        todo.id = doc.id;
        if (!todo.completed) todos.push(todo);
      });
      // Sort our todos based on time added
      todos.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      // Anytime the state of our database changes, we update state
      this.setState({ todos });
    });
    this.completeTodo = this.completeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  async completeTodo(id) {
    // Mark the todo as completed
    await firestore
      .collection(this.props.todoPath)
      .doc(id)
      .set({
        completed: true,
      });
  }

  async addTodo() {
    if (!this.state.pendingTodo) return;
    // Set a flag to indicate loading
    this.setState({ addingTodo: true });
    // Add a new todo from the value of the input
    await firestore.collection(COLLECTION).add({
      content: this.state.pendingTodo,
      completed: false,
      createdAt: new Date().toISOString(),
    });
    // Remove the loading flag and clear the input
    this.setState({ addingTodo: false, pendingTodo: '' });
  }

  render() {
    return (
      <Layout className="App__container">
        <Header className="App__header">
          <div className="logo" />
          <h1 className="App__header--h1">Todo</h1>
          <Menu
            className="App__nav-menu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout className="App">
          <Sider className="App__sider">
            <div className="App__logo" />
            <Menu theme="dark" mode="inline">
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Breadcrumb className="App__breadcrumb">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className="App__content">
              <TodoPage
                todos={this.state.todos}
                addTodo={this.addTodo}
                completeTodo={this.completeTodo}
              />
            </Content>
            <Footer className="App__footer">&copy; My Company</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

Home.propTypes = {
  todoPath: PropTypes.string,
};

Home.defaultProps = {
  todoPath: '',
};
