import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            //括号的意思是括号内部为一个js变量或表达式，需要执行后取值。
            <Image source={pic} style={{width: 193, height: 110}}/>
        );
    }
}

AppRegistry.registerComponent('LuoYeCong', () => Bananas);