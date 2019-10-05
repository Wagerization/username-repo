function gitRepo(){
    let username = $('#userchose').val();
    fetch(`application/vnd.github.v3+json/users/:${username}/repos`)
    .then( response => response.json())
    .then(response => {
        for(let i = 0; i < responsejson; i++){
            $('.results').prepend(`<ul><li>${responseJson[i]}</li></ul>`)
        }
    })
}

function clickForm(){
    $('.js-form').submit( event =>{
        event.preventDefault();
        gitRepo();
    });
}
