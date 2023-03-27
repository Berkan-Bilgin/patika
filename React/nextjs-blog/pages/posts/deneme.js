import axios from "axios";
import React from 'react'

function deneme() {
    (async  () => {
        const {data:userData} = await axios("https://jsonplaceholder.typicode.com/users/1")
        console.log(userData)
    
        const {data:postData} = await axios("https://jsonplaceholder.typicode.com/posts/1")
        console.log(postData)
    
    })();
  return (
    <div>deneme</div>
  )
}

export default deneme

