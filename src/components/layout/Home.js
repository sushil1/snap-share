import React, {Component} from 'react'
import {Posts, MapNavigation, Account} from '../containers'

class Home extends Component{
  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3'>
            <MapNavigation />
          </div>
          <div className='col-sm-6'>
            <Posts />
          </div>
          <div className='col-sm-3'>
            <Account />
          </div>
        </div>
      </div>
    )
  }
}


export default Home
