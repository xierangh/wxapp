
import React from 'react'
import {
    View,
    Text,
    Image
}from 'react-native'

import codePush from 'react-native-code-push'

class root extends React.Component{

    componentDidMount(){
        codePush.sync({
            updateDialog:{
                appendReleaseDescription:true,
                title:'更新提示',
                description:'\n更新内容：\n',
                mandatoryContinueButtonLabel:'升级',
                mandatoryUpdateMessage:'',
            },
            installMode:codePush.InstallMode.IMMEDIATE
        })
    }

    render(){
        return (
            <View>
                <Text>测试</Text>
                <Image source={require('./ico/Alipay.png')}/>
            </View>
        )
    }
}

export default codePush(root)