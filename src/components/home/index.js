import React from 'react';
import { Layout } from 'antd';
import firestore from 'firebase/firestore';
import TodoPage from 'containers/todo';
import PropTypes from 'prop-types';
import 'components/home/home.css';

const { Header, Footer, Content } = Layout;

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
      .collection(COLLECTION)
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
      <Layout className="App">
        <Header className="App-header">
          <h1>Quick Todo</h1>
        </Header>
        <Content className="App-content">
          <TodoPage
            todos={this.state.todos}
            addTodo={this.addTodo}
            completeTodo={this.completeTodo}
          />
        </Content>
        <Footer className="App-footer">&copy; My Company</Footer>
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
