// Fetch function : get the post by category 
// if any category is selected get all the posts
export async function getPosts(category){
    try{
        const response = await fetch('/api/posts')
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        const posts = data.posts || [];

        if (category && category.toString().trim() !== '') {
            const needle = category.toString().toLowerCase();
            return posts.filter(p => Array.isArray(p.categories) && p.categories.some(c => c && c.name && c.name.toLowerCase().includes(needle)));
        }
        return posts;
    }catch (error) {
        console.error('Erreur lors de la récupération des posts:', error);
        throw error;
    }
}