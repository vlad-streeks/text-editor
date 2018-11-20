import React, { Component } from 'react';

export class TextElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            styleBold: false,
            styleItalic: false,
            styleUnder: false
        };
        this.selectText = this.selectText.bind(this)
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({
            value: this.props.value
        })
    }

    selectText() {
        console.log(this.state.value)
    }

    setBold() {
        this.setState({
            styleBold: true
        })
    }

    setItalic() {
        this.setState({
            styleItalic: true
        })
    }

    setUnder() {
        this.setState({
            styleUnder: true
        })
    }

    render() {
        console.log(this.state.value);
        return (
            <p className = {'text '
            + (this.state.styleBold ? 'bold' : '')
            + (this.state.styleItalic ? 'italic' : '')
            + (this.state.styleUnder ? 'under' : '')
            }
            onClick={this.selectText}>
                {this.props.value}
            </p>
        );
    }
}

