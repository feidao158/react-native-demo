import React, { Component } from "react";

import { StyleSheet, Dimensions, Text, View, StatusBar, Image, TouchableOpacity, Button } from 'react-native'
import { inject, observer } from "mobx-react";
// import { computed } from "mobx";
@inject("RootStore")
@observer
class App extends Component<any, any> {

    // @computed get name() {
    //     return this.props.RootStore.name
    // }

    changeName = () => {
        this.props.RootStore.changeName(Date.now())
        this.setState({
            imageUrl: 'https://api.pingping6.com/api/acg3/index.api?time=' + this.props.RootStore.name
        })

        console.log(this.props.RootStore.name)
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
                resizeMode: 'contain',
                loadingStatus: true,
                display: 'flex'
            },
            imageUrl: 'https://api.pingping6.com/api/acg3/index.api?time=' + new Date().getTime(),
            loadingStatus: true,
        }

        console.log(styles.imageStyle)
    }

    clickHandler = () => {
        this.props.RootStore.changeName(Date.now())
        this.setState({
            imageUrl: 'https://api.pingping6.com/api/acg3/index.api?time=' + this.props.RootStore.name
        })
        console.log(this.state.imageUrl)

    }


    loadStartHandler = () => {
        this.setState({
            loadingStatus: true,
            imageInfo: {
                ...this.state.imageInfo,
                display: 'none'
            }
        })
        console.log('start loading...')

    }

    loadEndHandler = ()=> {
        this.setState({
            loadingStatus: false,
            imageInfo: {
                ...this.state.imageInfo,
                display: 'flex'
            }
        })
        console.log('load end...')
        console.log(this.state.loadingStatus)
    }



    render() {
       let {RootStore} = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.changeName}>
                    <Image onLoadStart={this.loadStartHandler} onLoadEnd={this.loadEndHandler}  style={this.state.imageInfo} source={{ uri: this.state.imageUrl }} ></Image>
                </TouchableOpacity>
                <Text onPress={this.changeName} style={styles.titleStyle}>{RootStore.name}</Text>
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