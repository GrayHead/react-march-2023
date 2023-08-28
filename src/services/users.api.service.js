const getAllUsers = async () => {
    const users = await (fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json()));

    return users;

}

const fetchUserPosts = async ({params: {id: userId}}) => {
    console.log(userId);

    const posts = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json());
    console.log(posts);
    return posts;


}

export {getAllUsers, fetchUserPosts}
