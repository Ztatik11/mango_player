import axios from "axios";
async function fetchUsers() {
    const response = await axios.get('http://192.168.0.23:3000/getUsers');
    console.log(response.data);
    return response.data;
}

async function fetchTracks() {
    const response = await axios.get('http://192.168.0.23:3000/getTracks');
    console.log(response.data);
    return response.data;
}

export default { fetchUsers, fetchTracks };