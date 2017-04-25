import superagent from 'superagent'
import Promise from 'bluebird'

export default {

  get: (endpoint, params)=>{
    return new Promise((resolve, reject)=>{
      superagent
      .get(endpoint)
      .query(params)
      .set('Accept', 'application/json')
      .end((err, response)=>{
        if(err){
          reject(err)
          return
        }
        resolve(response.body)
      })
    })
  },

  post: (endpoint, params)=>{
    return new Promise((resolve, reject)=>{
      superagent
      .post(endpoint)
      .send(params)
      .set('Accept', 'application/json')
      .end((err, response)=>{
        if(err){
          reject(err)
          return
        }
        resolve(response.body)
      })
    })
  },

  uploadFile: (url, file, params) =>{
    return new Promise((resolve, reject)=>{

      let uploadRequest = superagent.post(url)
      uploadRequest.attach('file', file)

      if(params != null){
        Object.keys(params).forEach((key)=>{
          uploadRequest.field(key, params[key])
        })
      }

      uploadRequest.end((err, resp)=>{
        if(err){
          reject(err)
          return
        }

        console.log('UPLOAD COMPLETE: '+JSON.stringify(resp.body))
        const uploaded = resp.body
        resolve(uploaded)

      })

    })
  }


}
