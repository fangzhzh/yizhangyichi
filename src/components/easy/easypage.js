import React from 'react';
import { connect } from 'react-redux';

import Home from '../home';
import connectDataFetchers from '../../hocs/connectDataFetcher';
import { loadChiTodos } from '../../actions/todos';

const Easy = ({ props }) => <Home todoPath="yizhangyichi/chi/todos" {...props} />;
const EasyPage = connect()(connectDataFetchers(Easy, [loadChiTodos]));
export default EasyPage;
