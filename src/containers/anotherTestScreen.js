import React, { Component } from 'react';
import {
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    FlatList,
    deviceWidth,
    Image
} from 'react-native';
import { connect } from "react-redux";
import {changeLang} from "../actions/index"

class anotherTestScreen extends Component{
    static navigationOptions = {
        title: 'anotherTestScreen.js',
    };

    _reduxStuff = () => {
        console.log("=============Redux_stuff==================");
        this.props.getNewItems();
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Check the store</Text>

                <Button
                    title="get store"
                    onPress={() => {console.log(this.props);}}
                />

                <Button
                    title="Change LANGUAGE"
                    onPress={() => { this.props.changeLang("en")  }}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLang: (lang) => {
            dispatch(changeLang(lang));
        },

    }
}

export default anotherTestScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(anotherTestScreen)

const styles = StyleSheet.create({
    loadingScreen: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    text: {
        color: "#000",
        marginLeft: 12,
        fontSize: 16,
        width: deviceWidth - 100,
    },
    smallText: {
        marginLeft: 12,
        fontSize: 10,
    },
    time: {
        padding: 2,
        marginLeft: 4,
        backgroundColor: '#80bfff',
        borderColor: "#80bfff",
        borderWidth: 1,
        borderRadius: 5,
    },
    row: {
        margin: 5,
        padding: 5,
    },
    photo: {
        height: 80,
        width: 80,
        borderRadius: 40,
        borderColor: "#fff",
        borderWidth: 3,

    },
});
