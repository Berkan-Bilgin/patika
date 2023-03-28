import axios from 'axios';


const getData = async (id) => {
    //Getting first request
    const { data: userData } = await axios(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    //Getting second request
    const { data: postData } = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );

    console.log(userData)
    console.log("posts:", postData)


};




export default getData