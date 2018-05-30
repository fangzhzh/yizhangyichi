import { connect } from 'react-redux';
import Home from 'components/home';

const mapStateToProps = state => ({
  todoPath: 'yizhangyichi/chi/todos',
});

const EasyPage = connect(mapStateToProps)(Home);
export default EasyPage;
