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
    //console.log('posts received: '+JSON.stringify(action.posts))
      updated['list'] = action.posts
      return updated

    case constants.CURRENT_LOCATION_CHANGED:
      updated['currentLocation'] = action.location
      updated['list'] = null
      return updated

    case constants.POST_CREATED:
    let updatedList = (updated['list'] == null)? [] : Object.assign([], updated['list'])

    updatedList.unshift(action.post)
    updated['list'] = updatedList
    return updated

    default:
      return updated
  }

}
