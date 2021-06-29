import React, {Component} from "react";
import { inject,observer } from "mobx-react";
import { View,Text } from "react-native";


@inject("RootStore")
@observer
export default class TimeInfo extends Component {
    render() {
        let {RootStore} = this.props
        return (
            <View>
                <Text>{RootStore.name}</Text>
            </View>
        )
    }
}