import constants from '../constants'
import {APIManager} from '../utils'

export default {

  fetchPosts: (params)=>{
    return (dispatch) => {

      APIManager.get('api/post', null)
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
          console.log('response: '+JSON.stringify(response))

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
  }

}
