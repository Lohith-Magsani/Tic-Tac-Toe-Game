



export default function GameBoard({onSelectSquare,board}){
    
   // const [gameBoard,setGameBoard]=useState(initalGameBoard);

   // function handleSelectSSquare(rowindex,colindex){
      //  setGameBoard((prevgameBoard)=>{
      //      const updatedBoard=[...prevgameBoard.map(innerArray=>[...innerArray])];
         /*   updatedBoard[rowindex][colindex]=activePlayerSymbol;
            return updatedBoard;

        });
        onSelectSquare();
    }*/
    return <ol id="game-board">
        {board.map((row,rowindex)=>
        <li key={rowindex}>
            <ol>
                {row.map((playerSymbol,colindex)=>
                <li key={colindex}>
                    <button onClick={()=>onSelectSquare(rowindex,colindex)} 
                    disabled={playerSymbol!==null}>
                        {playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    
    </ol>
}