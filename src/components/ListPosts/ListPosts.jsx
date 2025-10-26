import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard.jsx';
import {getPosts} from'../../services/posts.js'
import './ListPosts.css'
/*
this component is charged ot display the post getted with the fetch function getPost() form post.js and handle the pagination.
it take the category from the filter component and send it to the getPost() function who will handel get the post of this category
*/

const ListPosts = ({category}) => {
    const [listPosts, setListPosts] = useState([]) //store the post getted form the api
    const [currentPage, setCurrentPage] = useState(1)
    // const [postParPage, setPostParPage] = useState(5)
    const postParPage = 10

    // get the posts from the api with the getPost function 
    useEffect(()=>{
        const fetchPosts = async () => {                    
            try {
                const data = await getPosts(category);
                setListPosts(data);
            } catch (err) {
                console.log('Erreur lors du chargement des posts');
                console.error(err);
            }
        }
        fetchPosts()
    }, [category, currentPage])

    // change the state of the currente pagge when I select a category
    useEffect(() => {
        setCurrentPage(1);
    }, [category]);

    if (listPosts.length === 0) return <p>No posts found</p>;

    //calculate indices for slice : for page 1, first=0 last=postParPage
    const firstPostIndex = (currentPage - 1) * postParPage;
    const lastPostIndex = currentPage * postParPage;

    const currentListPosts = listPosts.slice(firstPostIndex, lastPostIndex)

    const detailsPost = currentListPosts.map(items => (
        <PostCard key={items.id} title={items.title} date={items.publishDate} author={items.author}/>
    ))

    // calcul how much page I need for the list of posts
    // total pages >= lenght of list / the number of post I want to display par page in this case is 5
    // return a int note a float
    // total pages should be based on the total number of posts getted form the fetch function
    const totalPages = Math.max(1, Math.ceil(listPosts.length / postParPage));
    

    //n is the index of the page where I want to go
    // update the currente page
    const goToPage = (n) => {
        //secure with max and min to not exceed the number of pages and don't go under 1
        const page = Math.max(1, Math.min(totalPages, n));
        setCurrentPage(page);
    }
    const lastpage = true ? currentPage=== totalPages : false
    const firstpage = true ? currentPage === 1 : false

    return (
        <div>
            <div className="category">
                <p>{category}</p>
            </div>
            <div className="list">
                {detailsPost}
            </div>

            <div className='page'>
                {!firstpage && <button onClick={() => goToPage(currentPage - 1)}>Prev</button>}
                <span> Page {currentPage} / {totalPages} </span>
                {!lastpage && <button onClick={() => goToPage(currentPage + 1)}>Next</button>}
            </div>
        </div>
    )
}

export default ListPosts
