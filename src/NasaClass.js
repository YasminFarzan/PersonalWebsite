import React from 'react';

class NasaClass extends React.Component {
    constructor(props) {
        super(props);
        this.reset()
    }

    getImage = () => {

        const api = "MZwupgqfb2TSs5fb582TMbtyLSfhqy5CBiJRdzGB"
        const url = `https://api.nasa.gov/planetary/apod?api_key=${api}&date=${this.state.inputValue}`
        fetch(url).then(response => response.json())
            .then(data => this.setState({description: data.explanation, url: data.url}))
    }

    reset() {
        // Always set the initial state in its own function, so that
        // you can trivially reset your components at any point.
        this.state = {
            inputValue: "",
            description: "",
            url: "https://commons.wikimedia.org/wiki/File:Solid_white.png"
        };
    }

    updateInputValue(evt) {
        const val = evt.target.value;
        // ...
        this.setState({
            inputValue: val
        });
    }

    render() {
        return(
            <div>
                <input type={"date"} id={"dateInput"} name={"startDate"} value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} min={"1995-06-16"}/>
                <button onClick={this.getImage}>Get Image</button>
                <img src={this.state.url}/>
                <section>
                    <p>{this.state.description}</p>
                </section>
            </div>
        )
    }
}
export default NasaClass;
