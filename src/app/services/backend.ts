import { Injectable } from '@angular/core';
import { BACKEND_URL } from './constants';

@Injectable()
export class BackendHandler {
    /*
    {
    //let url = BACKEND_URL + "/get-active-jobs"
    let url = BACKEND_URL + '/about'
    const resp = await fetch(url);
    let data;
    try{
      data = await resp.json();   
      console.log(data)
    }
    catch{
      
      data="n/a";
    }
    return data;
  }
    
    */

  async sign_in_client(p_data:any) {
    let url = BACKEND_URL + "/sign-in-client"
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(p_data)
    });
    console.log(response)
    return response.json();
  }

  async sign_up_client(p_data:any) {
    let url = BACKEND_URL + "/sign-up-client"
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(p_data)
    });
    console.log(response)
    return response.json();
  }
    

  async get_user_details(p_data:any){
    let url = BACKEND_URL + "/get-all-details"
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(p_data)
    });
    console.log(response)
    return response.json();
  }

  async post_user_email(client={},email={}){
    let url = BACKEND_URL + "/post-user-email"
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'client':client,'email':email})
    });
    console.log(response)
    return response.json();
  }

  async post_user_phone(client={},phone={}){
    let url = BACKEND_URL + "/post-user-phone"
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'client':client,'phone':phone})
    });
    console.log(response)
    return response.json();
  }


  async get_active_jobs_of_client(p_data:any) {
    let url = BACKEND_URL + "/get-active-jobs"
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(p_data)
    });
    console.log(response)
    return response.json();
  }




  async post_a_job_from_client(client={},job={}){
    let url = BACKEND_URL + "/post-a-job"
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'client':client,'job':job})
    });
    console.log(response)
    return response.json();
  }

  async delete_a_job_from_client(client={},jobID=""){
    let url = BACKEND_URL + "/delete-a-job"
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'client':client,'job':jobID})
    });
    console.log(response)
    return response.json();
  }
}