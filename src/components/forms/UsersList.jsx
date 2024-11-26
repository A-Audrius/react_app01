import User from "./User";

function UsersList({usersList}) {

    return (
        <>
        {usersList.map((user)  => (
            <User  user={user}   key= {user.id}
            />
            ))}
        
        </>

    );
}


export default UsersList;