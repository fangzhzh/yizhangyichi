import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from 'components/home';

const mapStateToProps = state => ({
  todoPath: 'yizhangyichi/zhang/todos',
});

const BusyPage = connect(mapStateToProps)(Home);
export default BusyPage;
