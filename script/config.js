function openPlayerConfig(){
    playerConfigOverlay.style.display='block';
    backDrop.style.display='block';

}


function closePlayerConfig(){
    playerConfigOverlay.style.display='none';
    backDrop.style.display='none';
    formElement.firstElementChild.classList.remove('error');
    errorOutPut.textContent="";
}


function savePlayerConfig(event) {
    event.preventDefault();
    const formData =new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();

    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add('error'); 
        errorOutPut.textContent="Please enter a valid name!";
        return;
    }
    

}