const getAllUsers = async () => {

    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return users;

}

const getPostsOfCurrentUser = async ({params: {id}}) => {
    console.log(id);
    const newVar = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json());


    return newVar;


}


export {getAllUsers, getPostsOfCurrentUser};
