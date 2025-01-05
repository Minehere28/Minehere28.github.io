const codeInput=document.querySelector(
    "#room-code-input"
)
const inputButton=document.querySelector(
    "#join"
)
const stringInput=document.querySelector(
    "#room-code-indicator"
)
function joinRoom(roomCode){

    if (roomCode.toUpperCase()== "hi"){
        alert("Join room successfully")
        return 
    }
    alert("Join room failed, please enter the code again!")
}
inputButton.addEventListener("click",
    function(){
        const roomCode = codeInput.value
        joinRoom(roomCode)
    }
)

codeInput.addEventListener("input",
    function(){
        const inputRoomCode = codeInput.value
        roomCodeIndicator.innerText = inputRoomCode
        toUpperCase()
    }
)