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

   createPost({title:'Post three', body:'this is post three'})
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
    .catch(err=>console.log(err)); 
  
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

  //async/await code
 console.log('person1 shows ticket');
  console.log('person2 shows ticket');

  const preMovie=async ()=>{
         
  const wifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket');
    }, 2000);
  })
  
const getPopcorn=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('popcorn');
    }, 2000);
})

const getButter=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('butter');
    }, 2000);
})

const getColdDrinks=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('cold drinks');
    }, 2000);
})

const ticket=await wifeBringingTicks;
    console.log('wife:i have the ${ticket}');
    console.log('hubby:lets go in');
    console.log('wife:i am hungry');

const popcorn=await getPopcorn;
    console.log(`hubby:here is the ${popcorn}`);
    console.log('wife:i need some butter on my popcorn');

const butter=await getButter;
console.log(`husband:here is the ${butter}`);
console.log('wife:i need coldrink');

const coldDrink=await getColdDrinks;
console.log(`hubby:here is the ${coldDrink}`);
console.log('wife:lets go we are going late'); 
const ticket=await wifeBringingTicks;
let [popcorn,butter,coldDrink]=await Promise.all([getPopcorn,getButter,getColdDrinks]);
console.log(`${popcorn},${butter},${coldDrink}`);
return ticket;
   }
  
  console.log('person4 shows ticket');
  console.log('person5 shows ticket');

  preMovie().then((m)=>{
    console.log(`person3 shows ${m}`);
  }) 

*/
Posts=[];

    const user={
        username:'Nikhil',
        lastActivityTime:new Date()
    }
    const user1={
        username:'Neeraj',
        lastActivityTime:new Date()
    }
    function createPost(user){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        Posts.push(user);
        resolve('post created');
        reject();
      }, 1000);
    })
}
function deletePost(){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        if(Posts.length>0){
            Posts.pop();
            resolve('post deleted');
        }
        else{
            reject('error:posts is empty');
        }
       },1000);
    })
 }
 async function userDetails(){
const msg1=await createPost(user);
console.log(msg1);
const msg2=await createPost(user1);
console.log(msg2);
const msg3=await deletePost();
console.log('post deleted');
    return Posts;
 }
 userDetails().then((post)=>{
    console.log(post);
 })
