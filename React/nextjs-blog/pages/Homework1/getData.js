import axios from 'axios';


    const getData = async  (id) => {
        const {data:userData} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(userData)
    
        const {data:postData} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(postData)
        
    
    };




export default getData