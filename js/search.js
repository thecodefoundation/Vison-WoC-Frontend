const searchInput = document.querySelector('.searchtext');
const searchBtn = document.querySelector('btn-link');

/* Not present yet */
const api = "#";

searchBtn.addEventListener('click', ($event) => {
    $event.preventDefault();
    const inputUrl = {
        Url : searchInput.value
    };
    submitFormData(inputUrl);
});

function makeRequest(data){
    return new Promise((resolve, reject)=>{
        let request = new XMLHttpRequest();
        request.open('POST', api + '/search'); 
        request.onreadystatechange = () => {
            if(request.readyState === 4){
                if(request.status === 201){
                    resolve(JSON.parse(request.response));
                }else{
                    reject(JSON.parse(request.response));
                }
            }
        }
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(data));
    });
}

async function submitFormData(inputUrl){
    try{
        const requestPromise = makeRequest(inputUrl);
        const response = await requestPromise;
    } catch(errorResponse) {
        // If there is place where we can show error message;
        /*responseMessage.textContent = errorResponse.error;*/
    }
}
