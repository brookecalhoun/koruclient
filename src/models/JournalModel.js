const url = 'http://localhost:4000/api/journal';
//store logic to make api calls (fetch/axios here)
class JournalModel {
    static all() {
        // fetch method uses a JS promise
        // when we call fetch, fetch is promising that at some point there will be a response
        return fetch(url)
            .then((response)=>{ 
                return response.json() //convert response to json
            })
            .catch((err)=>{
                console.log(err)
                // show user a message describing error

            })
    }
    // will make  fetch call to get a single game by it's id
    static show(journalId){
         return fetch(`${url}/${journalId}`)
            .then((response)=> response.json())
            .catch((err)=>{
                console.log(err)
            })
                
    }
}
export default JournalModel;
