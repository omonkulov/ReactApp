import React, { Component } from 'react';
import './Node.css';

class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {
            col,
            row,
            onMouseDown,
            onMouseEnter,
            onMouseUp,
            isWall,
            isStart,
            isFinish
        } = this.props;

        const extraClassName =
            isFinish ? "finish"
            : isStart ? "start"
            : isWall ? "walls" : "";
        return (
            <td id={this.props.id} className="node"
                className={`node ${extraClassName}`}
                onMouseDown={() => onMouseDown()}
                onMouseEnter={() => onMouseEnter(row, col)}
                onMouseUp={() => onMouseUp()}
            >

            </td>
        );
    }
}

export default Node;
