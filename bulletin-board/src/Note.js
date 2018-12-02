import React, { Component } from 'react';
import {FaPenFancy, FaTrash} from 'react-icons/fa'

class Note extends Component {
    constructor(props){
        super(props)
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
    }
    edit() {
        alert('edit')
    }
    remove() {
        alert('remove')
    }
    render() {
        return (
            <div className="note">
                <p>Learn React</p>
                <span>
                    <button onClick={this.edit} id="edit"><FaPenFancy /></button>
                    <button onClick={this.remove} id="remove"><FaTrash /></button>
                </span>
            </div>
        )
    }
}

export default Note