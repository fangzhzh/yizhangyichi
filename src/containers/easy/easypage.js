import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Easy from 'components/easy/easy'

const mapStateToProps = state => ({
})

const EasyPage = connect(mapStateToProps)(Easy);
export default EasyPage;
