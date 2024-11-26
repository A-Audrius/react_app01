function User ({user}) {
    const { username, email, channel, likes, id} = user;
console.log(user);


    return (

    
    <div>
        <p></p>
        <h1>{username}</h1>
        <p>{email}</p>
        <p>favorite channel : {channel}</p>
        <p>likes: {likes}</p>
    </div>
    );
}

export default User;