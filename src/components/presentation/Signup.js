import React, {Component} from 'react'

class Signup extends Component{
  constructor(){
    super()
    this.state = {
      newuser :{
        name: '',
        email:'',
        password:''
      },
      currentuser: ''
    }
  }

  registerUser(event){
    event.preventDefault()
    if(this.state.newuser.name.length == 0){
      alert('please enter name')
      return
    }
    if(this.state.newuser.email.length == 0){
      alert('please enter email')
      return
    }
    if(this.state.newuser.password.length == 0){
      alert('please enter password')
      return
    }
    this.props.onRegister(this.state.newuser)
  }

  updateUser(event){
    let updated = Object.assign({}, this.state.newuser)
    updated[event.target.id] = event.target.value
    this.setState({
      newuser: updated
    })

  }

  loginUser(event){
    event.preventDefault()
    if(this.state.newuser.email.length == 0){
      alert('please enter email')
      return
    }
    if(this.state.newuser.password.length == 0){
      alert('please enter password')
      return
    }
    this.props.onLogin(this.state.newuser)
  }

  render(){

    return(
      <div>
        <h3>SignUp</h3>
        <input onChange={this.updateUser.bind(this)} type='text' id='name' placeholder='Name'/><br />
        <input onChange={this.updateUser.bind(this)} type='text' id='email' placeholder='Email'/><br />
        <input onChange={this.updateUser.bind(this)} type='password' id='password' placeholder='password'/><br />
        <button onClick={this.registerUser.bind(this)}>Sign Up</button>
        <h3>LogIn</h3>
        <input onChange={this.updateUser.bind(this)} type='text' id='email' placeholder='Email'/><br />
        <input onChange={this.updateUser.bind(this)} type='password' id='password' placeholder='password'/><br />
        <button onClick={this.loginUser.bind(this)}>Log In</button>
      </div>
    )
  }
}

export default Signup
