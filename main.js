/*
Posts=[
      {title:'Post one' , body:'this is post one',createdAt:new Date().getTime()},
      {title:'Post two', body:'this is post two',createdAt:new Date().getTime()}
     ]
   
     let intervalId;
     function getPosts(){
          clearInterval(intervalId);
        intervalId= setTimeout(() => {
            let output='';
            Posts.forEach(post => {
                output+=`<li>${post.title} -last seen ${post.createdAt} </li>`
            });
            
            document.body.innerHTML=output;
         }, 1000);
     }

     

     const createPost=(post)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                Posts.push({...post,createdAt:new Date().getTime()});
            const error=false;
            if(!error){
                resolve();
            }
            else{
               reject('Error:something went wrong');
            }
             }, 2000);
        })
     }
    */
    function deletePost(){
        return new Promise((resolve,reject)=>{
           setTimeout(() => {
            if(Posts.length>0){
                Posts.pop();
                resolve(Posts);
            }
            else{
                reject('error:posts is empty');
            }
           },1000);
        })
     }

  /*  createPost({title:'Post three', body:'this is post three'})
    .then(()=>{
        getPosts();
        deletePost().then(()=>{
            getPosts();
            deletePost().then(()=>{
                    getPosts();
                    deletePost().then(()=>{
                        getPosts();
                        deletePost().then(()=>{console.log('deleted')})
                        .catch(()=>{
                             createPost({title:'Post four',body:'this is post four'})
                             .then(()=>{
                                getPosts();
                                deletePost().then(()=>{
                                    getPosts();
                                    deletePost().then(()=>{})
                                    .catch((error)=>{console.log(error)});
                                })
                             })
                        })
                    })
            })
        })
    })
    .catch(err=>console.log(err)); */
  
Posts=[];

    const user={
        username:'Nikhil',
        lastActivityTime:new Date()
    }
    const user1={
        username:'Neeraj',
        lastActivityTime:new Date()
    }

    const createPost=(user)=>{
        return new Promise((resolve,reject)=>{
          setTimeout(() => {
            resolve(Posts.push(user));
            reject();
          }, 1000);
        })
    }

    const updateLastUserActivityTime=(user)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
             user.lastActivityTime=new Date();
            resolve(user.lastActivityTime);
            }, 1000);
        })
    }

    Promise.all([createPost(user),createPost(user1),updateLastUserActivityTime(user),updateLastUserActivityTime(user1)]).then((values)=>{
        deletePost().then((values)=>{
          console.log(values);
        })
    }
  );