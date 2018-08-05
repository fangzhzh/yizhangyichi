import React from 'react';
import DataSource from 'store/datasource';
import TodoContext from 'store/todoContext';

export default function withTodo(WrappedComponent, selectData) {
  return class WrapperComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleTodoChange = this.handleTodoChange.bind(this);
      this.state = {
        data: selectData(DataSource, props),
      };
    }

    componentDidMount() {
      DataSource.addTodoListener(this.handleTodoChange);
    }
    componentWillUnmount() {
      DataSource.removeTodoListener(this.handleTodoChange);
    }

    handleTodoChange = () => {
      this.setState({ data: selectData(DataSource, this.props) });
    };

    render() {
      return (
        <TodoContext.Provider value={this.state.data}>
          <WrappedComponent todos={this.state.data} {...this.props} />;
        </TodoContext.Provider>
      );
    }
  };
}
