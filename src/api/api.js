/** Class to retrieve datas from 4 endpoints usign fetch method
 */

class Api {

    getPerformance(userId){
        return fetch(`http://localhost:3000/user/${userId}/performance`)
            .then(data => data.json())
            .catch((error) => {
                console.error('Error:', error);
              });
    }

    getActivity(userId){
        return fetch(`http://localhost:3000/user/${userId}/activity`)
            .then(data => data.json())
            .catch((error) => {
                console.error('Error:', error);
              });
    }

    getAverageSessions(userId){
        return fetch(`http://localhost:3000/user/${userId}/average-sessions`)
            .then(data => data.json())
            .catch((error) => {
                console.error('Error:', error);
              });
    }

    getUser(userId){
        return fetch(`http://localhost:3000/user/${userId}`)
            .then(data => data.json())
            .catch((error) => {
                console.error('Error:', error);
              });
    }

}


export default Api;