import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Busy from 'components/busy/busy'

const mapStateToProps = state => ({
})

const BusyPage = connect(mapStateToProps)(Busy);
export default BusyPage;
