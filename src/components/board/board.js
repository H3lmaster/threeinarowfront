import Square from "../square/square";

function Board() {

    return (
            <div>
                <div className="board-row">
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="board-row">
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="board-row">
                    <Square />
                    <Square />
                    <Square />
                </div>
            </div>
    );
    
}

export default Board;