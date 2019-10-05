function gitRepo(){
    let username = $('#userchose').val();
    fetch(`https://api.github.com/users/:username/repos`)
    .then( response => response.json())
    .then(response => {
        for(let i = 0; i < responsejson; i++){
            $('.results').prepend(`<ul><li>${responseJson[i]}</li></ul>`)
        }
    })
    .catch( error => console.logs('something went wrong '))
}

function clickForm(){
    $('#submit').submit( event =>{
        event.preventDefault();
        gitRepo();
    });
}
