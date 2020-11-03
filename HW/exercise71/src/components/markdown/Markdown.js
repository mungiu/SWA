import React from 'react'
import MarkDownInput from './markdDownInput';

class Markdown extends React.Component {
    constructor(properties) {
        super(properties);

        this.state = {
            inputText: ''
        };
    }

    render() {
        return (
            <div>
                <MarkDownInput
                    onKeyUp={this.handleKeyUp} />
                <p id="processedMarkedDownText">{this.state.inputText}</p>
            </div>)
    }

    /**
     * This method processes the markdown elements and adjusts text accordingly
     */
    handleKeyUp = () => {
        let currentInputValue = document.getElementById('markdownInputText').value;
        this.applyMarkDown(currentInputValue);
    }

    decomposeString = string => {
        let stringWithoutFirstChar = string.substr(1);
        let stringWithoutFirstTwoChars = string.substr(2);
        let firstCharacter = string.charAt(0);
        let secondCharacter = string.charAt(1);

        // TODO CONTINUE..............
        switch (firstCharacter) {
            case '#':
                if (secondCharacter === firstCharacter) {
                    let decomposedString = this.decomposeString(stringWithoutFirstTwoChars)
                    return <h2>{decomposedString}</h2>
                }
                else {
                    let decomposedString = this.decomposeString(stringWithoutFirstChar)
                    return <h1>{decomposedString}</h1>
                }
            case '*':
                {
                    let decomposedString = this.decomposeString(stringWithoutFirstChar)
                    return <b>{decomposedString}</b>
                }
            default:
                return string;
        }
    }

    applyMarkDown = currentInputValue => {
        let firstCharacter = currentInputValue.charAt(0);
        // if first character is not a letter then test for markdown
        // else return the text and let markdown apply on top as previous layers

        if (this.isCharacterALetter(firstCharacter))
            this.setState({
                inputText: currentInputValue
            });
        else
            this.setState({
                inputText: this.decomposeString(currentInputValue)
            });
    }

    isCharacterALetter = char => {
        return (/[a-zA-Z]/).test(char)
      }
}

export default Markdown