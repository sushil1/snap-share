import React, {Component} from 'react'
import Dropzone from 'react-dropzone'

class CreatePost extends Component{

  constructor(){
    super()
    this.state = {
      post: {
        image: '',
        caption: ''
      }
    }
  }

  updatePost(event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.post)
    updated[event.target.id] = event.target.value
    this.setState({
      post: updated
    })
  }

  submitPost(event){
    event.preventDefault()
    // console.log('submitPost: '+JSON.stringify(this.state.post))
    let updated = Object.assign({}, this.state.post)
    this.props.onCreate(updated)
  }

  uploadImage(event){
      //cloudinary set up
  }


  render(){
    return(
      <div>
        Create Post
        <Dropzone style={{border:'none'}}>
          <button onClick={this.uploadImage.bind(this)}>Upload Image</button>
        </Dropzone>
        <input id='caption' type='text' onChange={this.updatePost.bind(this)} placeholder='Caption' />
        <button onClick={this.submitPost.bind(this)}>Submit</button>
      </div>
    )
  }
}


export default CreatePost
