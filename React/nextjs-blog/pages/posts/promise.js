import React from 'react'

function promise() {
    const topla = (a,b) => a + b

    // const getComments = () => {
    //     return new Promise(
    //         (resolve,reject) => {
    //             console.log("comments requested")
    //             // resolve();
    //             reject(new Error ("not ok"))
    //         }
    //     )
    // }

    const getComments = (id) => {
        return new Promise(
            (resolve,reject) => {
                console.log("comments requested")
                if (id == 1){
                     resolve({success:true});
                } else {
                    // reject(new Error("not ok.Expected id:1 Received:" + id))
                    // ES6 template literals örneği
                    reject(new Error(`Not ok.Expected id:1 Received: ${id}`))

                }              
            }
        )
    }

    getComments(3).then(() => console.log("istek atıldı")).catch((e) => console.log(e))



  return (
    <div>promise</div>
  )
}

export default promise