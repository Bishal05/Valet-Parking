import React, { Component } from 'react';

export default class Header extends Component {
    
    render() {
        return (
            <div className="input-container">
                <input type="text" value={this.state.currTask}
                    onChange={this.handleCurrTask} />
                <button>submit</button>
            </div>
        )
    }
}