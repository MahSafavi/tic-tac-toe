function openPlayerConfig(event){
    editPlayer= +event.target.dataset.playerid;
    playerConfigOverlay.style.display='block';
    backDrop.style.display='block';

}


function closePlayerConfig(){
    playerConfigOverlay.style.display='none';
    backDrop.style.display='none';
    formElement.firstElementChild.classList.remove('error');
    errorOutPut.textContent="";
    document.getElementById('playername').value="";
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
    
    const updateSelectedPlayerData = document.getElementById('player-'+editPlayer+'-data');
    updateSelectedPlayerData.children[1].textContent=enteredPlayerName;

    players[editPlayer-1].name=enteredPlayerName;

    closePlayerConfig();

}