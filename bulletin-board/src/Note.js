import React, { Component } from 'react';
import {FaPenFancy, FaTrash, FaRecycle} from 'react-icons/fa'

class Note extends Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false
        };
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.save = this.save.bind(this);
    }
    edit() {
        this.setState({
            editing:true
        })
    }
    remove() {
        console.log('remove');
    }
    save () {
        console.log(this._newText.value);
    }
    renderForm(){
        return (
            <div className="note">
                <form>
                    <textarea ref={input => this._newText = input}/>
                    <button onClick={this.save}><FaRecycle /></button>
                </form>
            </div>
        )
    }
    renderDisplay() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit} id="edit"><FaPenFancy /></button>
                    <button onClick={this.remove} id="remove"><FaTrash /></button>
                </span>
            </div>
        )
    }
    render() {
        if(this.state.editing){
            return this.renderForm();
        } else{
            return this.renderDisplay();
        }
    }
}

export default Note