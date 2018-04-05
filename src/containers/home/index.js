import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from 'components/home/index'

const mapStateToProps = state => ({
})

const HomePage = connect(mapStateToProps)(Home);
export default HomePage;