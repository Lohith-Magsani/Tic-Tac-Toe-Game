import { useState } from "react";

export default function Player({ initialName, symbol,isActive,onChangeName }) {
   const [playerName,setPlayerName]=useState(initialName)
   const [isEditing,setEditing]=useState(false);

   function handleEditclick(){
      setEditing((editing)=>!editing);
      if(isEditing){
      onChangeName(symbol,playerName);
      }
       }
    function handleChange(event){
        setPlayerName(event.target.value)

    }
    
    let editableplayerName=<span className="player-name">{playerName}</span>;
    //let btnCaption="Edit";

    if(isEditing){
        editableplayerName=<input type="text" required value={playerName} onChange={handleChange} />
        //btnCaption="Save"
    }

    return (
        <li className={isActive?'active':undefined}>
            <span className="player">
            {editableplayerName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEditclick}>{isEditing?"Save":"Edit"}</button>
            </span>
        </li>
    );
}
