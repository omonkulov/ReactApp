import React, { Component } from 'react';
import Node from './Node/Node'
import './Pathfinder.css';

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;
const MAX_COLS = 80;
const MAX_ROWS = 80;

//TODO: CLEAN UP
class Pathfinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ROWS: Math.floor((window.innerHeight * .3) / 20),
            COLM: Math.floor((window.innerWidth * .8) / 20),
            grid: [],
            mouseIsPressed: false,
            paint: true,
        }
        this.handleMouseDown2 = this.handleMouseDown2.bind(this);
        this.handleMouseDown3 = this.handleMouseDown3.bind(this);
    }

    componentDidMount() {
        const grid = [];
        let maxRows = this.state.ROWS;
        maxRows = maxRows < MAX_ROWS ? maxRows: MAX_ROWS;
        let maxCols = this.state.COLM;
        maxCols = maxCols < MAX_COLS ? maxCols : MAX_COLS;
        
        for (let row = 0; row < maxRows; row++) {
            const currentRow = [];
            for (let col = 0; col < maxCols; col++) {
                currentRow.push(createNode(col, row));
            }
            grid.push(currentRow);
        }
        this.setState({ grid });
    }

    handleMouseDown() {
        this.setState({ mouseIsPressed: true });
    }

    handleMouseDown2() {
        this.setState({ paint: true });
    }
    handleMouseDown3() {
        this.setState({ paint: false });
    }

    handleMouseEnter(row, col) {
        if (!this.state.mouseIsPressed) return;
        //const newGrid = getNewGridWillWallToggled(this.state.grid, row, col);
        const newGrid = this.state.grid;
        const node = newGrid[row][col];
        const newNode = {
            ...node,
            isWall: this.state.paint
        };
        newGrid[row][col] = newNode;
        this.setState({ grid: newGrid });
    }

    handleMouseUp() {
        this.setState({ mouseIsPressed: false });
    }

    render() {
        console.log('render called');
        const { grid } = this.state;

        return (
            <div className="grid">
                <table>
                    <tbody>
                        {grid.map((row, rowIdx) => {
                            return (
                                <tr id={rowIdx} key={rowIdx}>
                                    {row.map((node, colIdx) => {
                                        const { row, col, isStart, isFinish, isWall } = node;
                                        return (
                                            <Node id={colIdx} key={colIdx}
                                                col={col}
                                                row={row}
                                                isWall={isWall}
                                                isStart={isStart}
                                                isFinish={isFinish}
                                                mouseIsPressed={this.state.mouseIsPressed}
                                                onMouseDown={() => this.handleMouseDown()}
                                                onMouseEnter={(row, col) => this.handleMouseEnter(row, col)}
                                                onMouseUp={() => this.handleMouseUp()}
                                            >
                                            </Node>
                                        )
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <button onClick={this.handleMouseDown2}>Erase</button>
                <button onClick={this.handleMouseDown3}>Paint</button>
                <p>Hello: {this.state.mouseIsPressed ? "True" : "False"}</p>
            </div>
        );
    }
}
const createNode = (col, row) => {
    return {
      col,
      row,
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null
    };
  };
const getNewGridWillWallToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
        ...node,
        isWall: !node.isWall
    };
    newGrid[row][col] = newNode;
    return newGrid;
};

export default Pathfinder;