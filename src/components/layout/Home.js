import React, {Component} from 'react'
import {Posts, MapNavigation} from '../containers'

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
            Admin container
          </div>
        </div>
      </div>
    )
  }
}


export default Home
