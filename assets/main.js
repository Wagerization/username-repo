function gitRepo(){
    let username = $('#userchose').val();
    fetch(`https://api.github.com/users/${username}/repos`)
    .then( response => response.json())
    .then(responseJson => displayRepos(responseJson))
}

function displayRepos(list){
    $('.results').empty();
    for( let i = 0; i < list.length; i++){
    // console.log(list[i].name)
    // console.log(list[i].html_url)
    $('.results').prepend(`<div><a href='${list[i].html_url}'>${list[i].name}</a>  </div>`).addClass('active');
    }
}

function clickForm(){
    $('.js-form').submit( event =>{
        event.preventDefault();
        gitRepo();
    });
}

$(function(){
    clickForm();
});