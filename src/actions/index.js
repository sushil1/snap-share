import constants from '../constants'
import {APIManager} from '../utils'

export default {

  fetchPosts: (params)=>{
    return (dispatch) => {

      APIManager.get('api/post', params)
      .then(response=>{
        dispatch({
          type: constants.POSTS_RECEIVED,
          posts: response.result
        })
      })
      .catch(err=>{
        console.log('ERROR: '+err)
      })

    }

  },

  createPost: (params)=>{
    return (dispatch) =>{
      APIManager.post('/api/post', params)
        .then(response=>{
          // console.log('response: '+JSON.stringify(response))
          dispatch({
            type: constants.POST_CREATED,
            post: response.result
          })

        })
        .catch(err=>{
          console.log('err: '+err)
        })
    }
  },

  updateCurrentLocation: (location)=>{
    return{
      type: constants.CURRENT_LOCATION_CHANGED,
      location: location
    }
  },

  signup: (profile)=>{
    return (dispatch) => {
      APIManager.post('/account/register', profile)
      .then(response =>{
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          user: response.profile
        })

      })
      .catch(err=>{
        console.log('ERROR: '+err)
      })
    }
  },

  login: (credentials)=>{
    return (dispatch) => {
      APIManager.post('/account/login', credentials)
      .then(response =>{
        //console.log(JSON.stringify(response))
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          user: response.profile
        })

      })
      .catch(err=>{
        console.log('ERROR: '+err)
      })
    }
  },

  checkCurrentUser: ()=>{
    return (dispatch) =>{
      APIManager.get('/account/currentuser', null)
      .then(response=>{
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          user: response.result
        })
      })
      .catch(err=>{
        console.log('ERROR: '+err)
      })
    }
  }


}
