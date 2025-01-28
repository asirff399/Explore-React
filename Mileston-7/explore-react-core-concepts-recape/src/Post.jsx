import './post.css'
export default function Post({post}){
    console.log(post)
    const {title,userId,id,body} = post

    return (
        <div className='post'>
           <h5>Title: {title}</h5>
           <h3>UserID: {userId}</h3>
           <h3>PostID: {id}</h3> 
           <p>{body}</p>
        </div>
    )
}