import React, { Component } from 'react';
import './FileZone.css';
import { TextElement } from './TextElement/TextElement'
class FileZone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: []
        };

        // this.textArr = this.textArr.bind(this);
        // this.openHistory = this.openHistory.bind(this);
        // this.closeHistory = this.closeHistory.bind(this);
    }

    componentWillMount(){
       if(this.props.text){
            this.setState({
                text: this.props.text.split(' ')
            })
        }
    }

    render() {
        console.log(this.props.text);

        return (
            <div id="file-zone">
                <div id="file">
                    <TextElement value = {this.props.text} />
                </div>
            </div>
        );
    }
}

export default FileZone;
