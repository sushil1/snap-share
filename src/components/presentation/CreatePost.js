import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'
import {APIManager} from '../../utils'

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
    if(this.state.post.image.length == 0){
      alert('please add an image first')
      return
    }
    if(this.state.post.caption.length == 0){
      alert('please add a caption first')
      return
    }

    let updated = Object.assign({}, this.state.post)
    this.props.onCreate(updated)
  }

  imageSelected(files){
    const image = files[0]
    console.log('image selected: '+JSON.stringify(image))

    const cloudName = 'snapshot' //cloudname from cloudinary
    const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'

    const timestamp = Date.now()/1000
    const uploadPreset = 'tn66cuy3'

    const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'JqdG19_m_otoDtD_GeJcRaq8sSQ'

    const signature = sha1(paramsStr)

    const params = {
      'api_key': '895473156114421',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature
    }

    APIManager.uploadFile(url, image, params)
    .then(uploaded =>{
      console.log('upload complete '+JSON.stringify(uploaded))
      let updated = Object.assign({}, this.state.post)
      updated['image'] = uploaded['secure_url']
      this.setState({
        post : updated
      })
    })

      //cloudinary returns this after uploading: {"public_id":"vw4rgxsqdfyjhqzojwix","version":1493024760,"signature":"8c8d35c70cdda1e34d16ce6a91eddd039dda1591","width":2144,"height":1052,"format":"png","resource_type":"image","created_at":"2017-04-24T09:06:00Z","tags":[],"bytes":183852,"type":"upload","etag":"bc6033e304b9ad7bbe46dc356e6b021a","url":"http://res.cloudinary.com/snapshot/image/upload/v1493024760/vw4rgxsqdfyjhqzojwix.png","secure_url":"https://res.cloudinary.com/snapshot/image/upload/v1493024760/vw4rgxsqdfyjhqzojwix.png","original_filename":"2"}

    .catch(err=>{
      console.log('err: '+err)
    })

  }

  render(){
    return(
      <div style={{background:'#fff'}}>
        <h3>Submit Post</h3>
        <input id='caption' type='text' onChange={this.updatePost.bind(this)} placeholder='Caption' />
        <div className='row'>
          <div className='3u 12u$(small)'>
            <Dropzone onDrop={this.imageSelected.bind(this)} style={{border:'none'}}>
              <button className='button special small'>Add Image</button>
            </Dropzone>
          </div>
          <div className='3u 12u$(small)'>
            <button className='button special small' onClick={this.submitPost.bind(this)}>Submit</button>
          </div>
          <div className='6u 12u$(small)'>
            <img style={{width: 120, float:'right', marginTop:12}} src={this.state.post.image} />
          </div>
        </div>
        <br /><br /><hr />
      </div>
    )
  }
}


export default CreatePost
