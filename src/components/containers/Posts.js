import React, {Component} from 'react'
import {APIManager} from '../../utils'
import {connect} from 'react-redux'
import actions from '../../actions'
import {CreatePost} from '../presentation'

class Posts extends Component{

  componentDidMount(){
    this.props.fetchPosts(null)

  }

  componentDidUpdate(){
    console.log('componentDidUpdate: ')
    if(this.props.posts.list == null)
      this.props.fetchPosts(null)
  }

  submitPost(post){
    post['geo'] = [
      this.props.posts.currentLocation.lat,
      this.props.posts.currentLocation.lng
    ]

    console.log('submitPost: '+JSON.stringify(post))
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
    posts: state.post
  }
}

const dispatchToProps = (dispatch) => {
  return{
    fetchPosts: (params) => dispatch(actions.fetchPosts(params)),
    createPost: (params) => dispatch(actions.createPost(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Posts)
