
import axios from "axios"
import { LOGINFAILURE, LOGINLOADING, LOGINSUCESS, SIGNUPFAILURE, SIGNUPLOADING, SIGNUPSUCESS } from "../actiontype"



const getdata=()=>async(dispatch)=>{
       const res= await axios.get("https://myownapitodo.herokuapp.com/User")  
       return res.data
    
   
    

}

const postApi = (data)=> async(dispatch)=>{
    const res=  await axios.post("https://myownapitodo.herokuapp.com/User",data).then(()=>{
       dispatch(getdata())
    })
}








export {postApi,getdata}