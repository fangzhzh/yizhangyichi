import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Todo from 'components/todo';

const mapStateToProps = state => ({});

const TodoPage = connect(mapStateToProps)(Todo);
export default TodoPage;
