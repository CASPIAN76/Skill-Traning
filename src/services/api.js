
import  React, {useState} from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
const axiosRequestConfig = {
    headers: { 'Content-Type': 'application/json' }
  }


export default class Api extends React.Component {
    constructor(props) {
        super(props);

      }

   getBaseUrl(){
    var url =  "hpps://www.google.com";
    return url;
  }




  login(){
    return new Promise((resolve,reject)=>{
      var config = {
          method: 'post',
          url: this.getBaseUrl() + API_CONSTANTS.login,
          data: {email:'test@admin.com', password:'user1'},
          headers: { 
            'Content-Type': 'application/json',
            
          },
      };
      // console.log('Login Response');
      axios(config).then((response) => {
        // console.log('Login Response',response);
        if(response.data.access_token){
          var storage = '';
          storage = {
            _token: response.data.access_token,
            token_type: response.data.token_type,
            user_roles: response.data.data.user_roles,
            user_details: response.data.data.user_details,
          }
          
         
          localStorage.setItem(`${API_CONSTANTS.subdomain}`,JSON.stringify(storage));
          resolve(response.data.access_token);
        }else {
          console.log('error')
          resolve('error')
        }
      }).catch(err => {
        console.log(err);
      });

    }).catch(err => {
      console.log(err);
    });
  }

  refreshToken(token){
  

      return new Promise((resolve,reject)=>{
          var config = {
              method: 'post',
              url: this.getBaseUrl() + API_CONSTANTS.refresh,
  
              headers: { 
                  'Authorization': 'Bearer '+token
              },
          };
            axios(config).then(function (response) {
              // console.log(response);
              console.log('Refresh Response',response);
              if(response.data.access_token){
                var storage = {};
                storage = JSON.parse(localStorage.getItem(`${API_CONSTANTS.subdomain}`));
                storage._token = response.data.access_token
                localStorage.setItem(`${API_CONSTANTS.subdomain}`,JSON.stringify(storage));
                resolve(response.data.access_token);
              }
            })
      
      })
    
  }

  getToken(){
    return new Promise((resolve,reject)=>{
      resolve(this.login());
        
    })
    
  }

  callAxios(endPoint, reqData, auth=true){
    return new Promise((resolve, reject) => {
        Promise.all([this.getBaseUrl(),this.getToken()])
        .then(data => {
            console.log(reqData);
          
          
          const reqDataHeader = {
            ...reqData,
          };
          
          const authtoken = auth ?  'Bearer '+ data[1] : "";
          
          if ( data[0] != null) {
            
            axios
              .post(
                data[0] + endPoint,
                { ...reqData},                    
                {
                  headers: { 'Content-Type': 'application/json',
                  'Authorization': authtoken
                }
              }
              )
              .then((response) => {
              
                 if(response.data.access_token){ 
                 
                  resolve({success: true, access_token: response.data.access_token, data:response.data.data, message: response.data.message});
                 }else if(response.data.aaData){
                  resolve({success: true, data: response.data});
                }else if(response.data.status == "success") {
                    resolve({success: true, data: response.data.data , message: response.data.message});
                 }else if(response.data.status == "error" || response.data.status == false){
                  var $str = response.data.data;
                  if(typeof response.data.errorcode!=='undefined' && response.data.errorcode===409){
                    var msg = Object.entries(response.data.message);
                    // console.log("message=",msg);
                    $str = '';
                    msg.map((msg, key)=>{
                      console.log("api controller ".msg);
                      $str+=msg[1]+"<br>";
                    })

                    Swal.fire({
                      title: "Following Error Detected",
                      html: $str,
                      icon: "error",
                      showConfirmButton: false,
                    })
                  }else{

                    resolve({success: false, message: response.data.message, data: $str});
                  }
                 }else{
                
                  resolve({success: false, data: response.data.message});
                 }                   
                
              })
              .catch((err) => {
              
                resolve({success: false, data:'Some Error occured!'});
              });
          } else {
            resolve({success: false, data: 'Some Error occured!'});
          }
        })
        .catch(err => {
          console.log(err);
        });
    });


    
  }
    
  callAxiosFile(endPoint, reqData, auth=true){
    console.log( 'data', reqData)
      return new Promise((resolve, reject) => {
          Promise.all([this.getBaseUrl(),this.getToken()])
          .then(data => {
              console.log(reqData);
            
           
            const authtoken = auth ?  'Bearer '+ data[1] : "";
            
            if ( data[0] != null) {
              console.log( { headers: { 'Content-Type': "multipart/form-data",
              'Authorization': authtoken}})
              axios
                .post(
                  data[0] + endPoint,
                   reqData,                    
                  {
                    headers: { 'Content-Type': "multipart/form-data",
                    'Authorization': authtoken
                  }
                }
                )
                .then((response) => {
                  //  console.log('Request Respomse', response);
                   if(response.data.access_token){ 
                   
                    resolve({success: true, access_token: response.data.access_token, data:response.data.data, message: response.data.message});
                   }else if(response.data.aaData){
                    resolve({success: true, data: response.data});
                  }else if(response.data.status == "success") {
                      resolve({success: true, data: response.data.data , message: response.data.message});
                   }else if(response.data.status == "error" || response.data.status == false){
                    var $str = response.data.data;
                    if(typeof response.data.errorcode!=='undefined' && response.data.errorcode===409){
                      var msg = Object.entries(response.data.message);
                      // console.log("message=",msg);
                      // $str = '';
                      msg.map((msg, key)=>{
                        console.log("api controller ".msg);
                        $str+=msg[1]+"<br>";
                      })
  
                      Swal.fire({
                        title: "Following Error Detected",
                        html: $str,
                        icon: "error",
                        showConfirmButton: false,
                      })
                    }else{
  
                      resolve({success: false, message: response.data.message, data: $str});
                    }
                   }else{
                    // Alert.alert(''+response.data.message);
                    resolve({success: false, data: response.data.message});
                   }                   
                  
                })
                .catch((err) => {
                  //resolve({success: false, data: err.message});
                  resolve({success: false, data:'Some Error occured!'});
                });
            } else {
              resolve({success: false, data: 'Some Error occured!'});
            }
          })
          .catch(err => {
            console.log(err);
          });
      });
  
  
      
    }

  callAxiosGet(endPoint, auth=true){
    return new Promise((resolve, reject) => {
      Promise.all([this.getBaseUrl(),this.getToken()])
        .then(data => {
          console.log(data);
          console.log('================================>');
          console.log('URL: ' + data[0] + endPoint);
       
          console.log('================================>');
          const authtoken = auth ?  'Bearer '+data[1] : "";
          if (data[0] && data[0] != null) {
            axios
              .get(
                data[0] + endPoint,                                     
                {
                  headers: { 'Content-Type': 'application/json',
                  'Authorization':authtoken
                }
              }
              )
              .then((response) => {
                  
                if(response.data.status == "success") {
                  resolve({success: true, data: response.data.data , message: response.data.message});
                }else if(response.data.status == "error" || response.data.status == false){
                  var $str = response.data.data;
                  if(typeof response.data.errorcode!=='undefined' && response.data.errorcode===409){
                    var msg = Object.entries(response.data.message);
                  
                    $str = '';
                    msg.map((msg, key)=>{
                      console.log("api controller ".msg);
                      $str+=msg[1]+"<br>";
                    })

                    Swal.fire({
                      title: "Following Error Detected",
                      html: $str,
                      icon: "error",
                      showConfirmButton: false,
                    })
                  }else{

                    resolve({success: false, message: response.data.message, data: $str});
                  }
                }else{
                  // Alert.alert(''+response.data.message);
                  resolve({success: false, data: response.data.message});
                }                     
                
              })
              .catch((err) => {
                //resolve({success: false, data: err.message});
                resolve({success: false, data:'Some Error occured!'});
              });
          } else {
            resolve({success: false, data: 'Some Error occured!'});
          }
        })
        .catch(err => {
          console.log(err);
          console.log(err);
        });
    });
  }
  callAxiosWithoutSession(endPoint, reqData){
    console.log(endPoint,' ',reqData)
    return new Promise((resolve, reject) => {
      Promise.all([this.getBaseUrl()])
        .then(data => {
          console.log(data);
          console.log('================================>');
          console.log('URL: ' + data[0] + endPoint);
          const reqDataHeader = {
            ...reqData,
          };
          console.log('Request Body : ' + JSON.stringify(reqDataHeader));
          console.log('================================>');
          
          if (data[0] && data[0] != null) {
            axios
              .post(
                data[0] + endPoint,
                { ...reqData},                    
                axiosRequestConfig
              )
              .then((response) => {
                 console.log('Request Respomse', response);
                 if(response.data.success){
                  resolve({success: true, data: response.data});
                 }else{
                  resolve({success: false, data: response.data});
                 }                   
                
              })
              .catch(err => {
               // console.log('Request Respomse', err);
               // resolve({success: false, data: err.message});
                resolve({success: false, data:'Some Error occured!'});
              });
          } else {
            resolve({success: false, data: 'Some Error occured!'});
          }
        })
        .catch(err => {
          console.log(err);
          console.log(err);
        });
    });
  }

  callAxiosGetWithoutSession(endPoint){
    console.log(endPoint)
    return new Promise((resolve, reject) => {
      Promise.all([this.getBaseUrl()])
        .then(data => {
          console.log(data);
          console.log('================================>');
          console.log('URL: ' + data[0] + endPoint);            
          
          if (data[0] && data[0] != null) {
            axios
              .get(
                data[0] + endPoint,                            
              )
              .then((response) => {
                 console.log('Request Respomse', response);
                 if(response.data.success){
                  resolve({success: true, data: response.data});
                 }else{
                  resolve({success: false, data: response.data});
                 }                   
                
              })
              .catch(err => {
               console.log('Request Respomse', err);
               // resolve({success: false, data: err.message});
                resolve({success: false, data:'Some Error occured!'});
              });
          } else {
            resolve({success: false, data: 'Some Error occured!'});
          }
        })
        .catch(err => {
          console.log(err);
          console.log(err);
        });
    });
  }

}