import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard.jsx';

/*
this component is charge to get the post from the api and handle the pagination
it take post's information and send it to the PostCard component how will handle the display of the post
*/

const ListPosts = () => {
    const [posts, setPosts] = useState([]) //store the post getted form the api
    const [currentPage, setPage] = useState(1)
    const [postParPage, setPostParPage] = useState(10)
    
    //get the post form the api
    useEffect(()=>{
        fetch('/api/posts')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPosts(data.posts)
        })
        .catch(err => console.error(err));
    }, [])

    if (posts.length === 0) return <p>Chargement...</p>;

    // calculate indices for slice: for page 1, first=0 last=postParPage
    const firstPostIndex = (currentPage - 1) * postParPage;
    const lastPostIndex = currentPage * postParPage;

    const currentsposts = posts.slice(firstPostIndex, lastPostIndex)


    const listposts = currentsposts.map(items => (
        <PostCard key={items.id} title={items.title} date={items.publishDate} author={items.author} />
    ))
    // calcul how much page I need for the list of posts
    // total pages >= lenght of list / the number of post I want to display par page in this case is 10
    // return a int note a float
    const totalPages = Math.max(1, Math.ceil(posts.length / postParPage));
    
    //handle the current page 
    //n is the index of the page where i want to go
    const goToPage = (n) => {
        //secure with max and min to not exceed the number of pages and don't go under 1
        const page = Math.max(1, Math.min(totalPages, n));
        setPage(page);
    }

  return (
    <div>
        {listposts}
        <div>
            <button onClick={() => goToPage(currentPage - 1)}>Prev</button>
            <button onClick={() => goToPage(currentPage + 1)}>Next</button>
        </div>
    </div>
  )
}

export default ListPosts
