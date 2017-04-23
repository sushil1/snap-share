import constants from '../constants'

var initialState = {
  currentLocation: {
    lat: -33.775973,
    lng:151.1142356
  },
  list: null
}

export default (state=initialState, action)=>{

  let updated = Object.assign({}, state)

  switch(action.type){

    case constants.POSTS_RECEIVED:
    console.log('posts received: '+JSON.stringify(action.posts))
      updated['list'] = action.posts
      return updated
    // let updatedList = updated['list']
    //   updatedList.push(action.posts)
    //   console.log(updated)
    //   return updated

    case constants.CURRENT_LOCATION_CHANGED:
    // console.log('CURRENT_LOCATION_CHANGED: '+JSON.stringify(action.location))
      updated['currentLocation'] = action.location
      updated['list'] = null
      return updated

    default:
      return updated
  }

}
