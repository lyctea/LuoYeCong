
/*
 ES6模块主要有两个功能：export和import

 export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口

 import用于在一个模块中加载另一个含有export接口的模块。
*/
import React,{ Component} from 'react';
import {AppRegistry, Text} from 'react-native';

class LuoYeCong extends Component {
    render(){
        return (
            <Text>Hello world!</Text>
        );
    }
}
AppRegistry.registerComponent('LuoYeCong', () => LuoYeCong);
//AppRegistry模块则是用来告知React Native哪一个组件被注册为整个应用的根容器