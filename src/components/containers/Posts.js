import React, {Component} from 'react'
import {APIManager} from '../../utils'
import {connect} from 'react-redux'
import actions from '../../actions'
import {CreatePost} from '../presentation'

class Posts extends Component{

  componentDidMount(){
    const currentLocation = this.props.posts.currentLocation
    this.props.fetchPosts(currentLocation)

  }

  componentDidUpdate(){
    const currentLocation = this.props.posts.currentLocation
    console.log('componentDidUpdate: ')
    if(this.props.posts.list == null)
      this.props.fetchPosts(currentLocation)
  }

  submitPost(post){
    const user = this.props.account.user
    if(user == null){
      alert('please signup or login to submit')
      return
    }
    post['profile'] = {
      id: user.id,
      email: user.email
    }
    post['geo'] = [
      this.props.posts.currentLocation.lat,
      this.props.posts.currentLocation.lng
    ]

    //console.log('submitPost: '+JSON.stringify(post))
    this.props.createPost(post)

  }

  render(){
    const list = this.props.posts.list
    return(
      <div>
        <CreatePost onCreate={this.submitPost.bind(this)}/>
        <ul>
          {(list == null)? null: list.map(post=>{
            return(
              <li key={post.id}>{post.caption}</li>
            )
          })}
        </ul>
      </div>
    )
  }

}

const stateToProps = (state) => {
  return{
    posts: state.post,
    account: state.account
  }
}

const dispatchToProps = (dispatch) => {
  return{
    fetchPosts: (params) => dispatch(actions.fetchPosts(params)),
    createPost: (params) => dispatch(actions.createPost(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Posts)
