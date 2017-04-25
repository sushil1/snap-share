import React, {Component} from 'react'
import {Signup} from '../presentation'
import {APIManager} from '../../utils'
import {connect} from 'react-redux'
import actions from '../../actions'

class Account extends Component{

  register(user){
      this.props.signup(user)
  }

  login(credentials){
    this.props.login(credentials)
  }

  logout(event){
    event.preventDefault()
    APIManager.get('account/logout', null)
    .then(response=>{
      console.log(JSON.stringify(response.message))
    })
    .catch(err=>{
      alert(err)
    })
  }

  componentDidMount(){
    this.props.checkCurrentUser()
  }

  render(){
    const currentUser = this.props.account.user
    return(
      <div>
        {(currentUser == null)? <Signup onRegister={this.register.bind(this)}
        onLogin={this.login.bind(this)}/> : <div><h3>Welcome, {' '}{currentUser.name}</h3><br /><button onClick={this.logout.bind(this)}>Logout</button></div>}
      </div>
    )
  }
}

const stateToProps = (state)=>{
  return{
    account: state.account
  }
}

const dispatchToProps = (dispatch) => {
  return{
    signup: (profile) => dispatch(actions.signup(profile)),
    login: (credentials) => dispatch(actions.login(credentials)),
    checkCurrentUser: () => dispatch(actions.checkCurrentUser())
  }
}

export default connect(stateToProps, dispatchToProps)(Account)
