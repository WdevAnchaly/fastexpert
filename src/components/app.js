import React, { Component } from 'react'
import Header from './common/header/header';
import Footer from './common/footer/footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header logoName="logo.png" />
                   {this.props.children}
                <Footer logoName="logo.png" />
            </div>
        )
    }
}


export default App