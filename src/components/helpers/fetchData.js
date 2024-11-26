const url = "http://localhost:5000/users";
const newUser = {
    username: 'User1',
    email: "user1@gmail.com",
    channel: "Userchannel",
    likes: 23
}




const fetchData = async () => {

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),

        });
        console.log(response);
        const data = await response.json();
        console.log(data);



        if (!response.ok) {
            throw new Error("Klaida!");
        }
    }
    catch (error) {
        console.log(error.message);
    }
};

fetchData();