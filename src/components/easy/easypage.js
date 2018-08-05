import React from 'react';
import { connect } from 'react-redux';

import Home from '../home';
import connectDataFetcher from '../../hocs/connectDataFetcher';
import loadChiTodos from '../../actions/todos';

const EasyPage = props => <Home todoPath="yizhangyichi/chi/todos" {...props} />;
export default connect(connectDataFetcher(EasyPage, [loadChiTodos]));
