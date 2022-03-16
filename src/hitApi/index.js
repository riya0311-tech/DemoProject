import axios from "axios"

export const  getUserData = async(API='https://randomuser.me/api')=>{
return  await axios.get(API).then(data=>{
    console.log(process.env.USER_API)
     if(data.data.results[0]){
         return data.data.results[0]
     }
 })
 
}
