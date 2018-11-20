import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.getText()
        };

        this.getText = this.getText.bind(this);
    }

    getText() {
        let self = this;
        getMockText().then(function (result) {
            console.log(result);
            return result
        })
            .then((res) => {
            self.setState({text: res})
        })
    }



    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel/>
                    <FileZone text = {this.state.text }/>
                </main>
            </div>
        );
    }
}

export default App;
