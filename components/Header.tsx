import React, { Component } from "react";

import { StyleSheet, Dimensions, Text, View, StatusBar, Image, TouchableOpacity, Button } from 'react-native'
import { inject, observer } from "mobx-react";
@inject("rootStore")
@observer
class App extends Component<any, any> {

    changeName = () => {
        console.log('realod..')
        this.props.rootStore.changeName(Date.now())
        console.log(this.props.rootStore.name)
    }

    static defaultProps = {
        title: 'helloaa',
        imageUrl: 'https://api.pingping6.com/api/acg3/index.api?time=' + new Date().getTime(),
        width: 0,
        height: 0
    }

    static imageSizeInfo = {
        width: 0,
        height: 0
    }


    constructor(props: any) {
        super(props)
        this.state = {
            imageInfo: {
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height-200,
                resizeMode: 'contain'
            },
            imageUrl: 'https://api.pingping6.com/api/acg3/index.api?time=' + new Date().getTime(),
            loadingStatus: true,
        }

        console.log(styles.imageStyle)
    }

    clickHandler = () => {
        this.props.rootStore.changeName(Date.now())
        this.setState({
            imageUrl: 'https://api.pingping6.com/api/acg3/index.api?time=' + this.props.rootStore.name
        })
        console.log(this.state.imageUrl)

    }


    loadStartHandler = () => {
        this.setState({
            loadingStatus: true
        })
        console.log('start loading...')

    }


    render() {
        let {name} = this.props.rootStore
        return (

            <View style={styles.container}>
                <TouchableOpacity onPress={this.clickHandler}>
                    <Image onLoadStart={this.loadStartHandler} style={this.state.imageInfo} source={{ uri: this.state.imageUrl }} ></Image>
                </TouchableOpacity>
                <Text onPress={this.changeName} style={styles.titleStyle}>{name}</Text>
                <Text onPress={this.changeName}>change</Text>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        backgroundColor: '#000',

        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight
    },
    titleStyle: {
        color: 'red',
        fontSize: 32
    },
    imageStyle: {
        width: 200,
        height: 200
    }
})

export default App