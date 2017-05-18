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
import {fetchData} from "../actions/index"
import FlatListComponent from "../components/flatListComponent"

class testScreen extends Component{
    static navigationOptions = {
        title: 'testScreen.js',
    };

    _reduxStuff = () => {
        console.log("=============Redux_stuff==================");
        this.props.getNewItems();
    }
    render() {
        const { navigate } = this.props.navigation;
        const {done, items, isFetching} = this.props.testScreen;
        return (
            <View>
                <Text>Some new screen</Text>
                <Button
                    title="Load Data"
                    onPress={() => this._reduxStuff()}
                />
                <Button
                    title="get store"
                    onPress={() => {console.log(this.props);}}
                />

                <Button
                    title="Next page"
                    onPress={() => {navigate('Next', { name: 'Jane' })}}
                    style={{margintTop:10}}
                />

                <View style={{margin:10}}>
                    {isFetching &&
                        <Text>Loading...</Text>
                    }
                    {done &&
                    <FlatList
                        data={items.place_list}
                        keyExtractor={(item, index) => index}
                        renderItem={ ({item}, index) =>{
                            return <FlatListComponent name={item.name} id={item.place_id} img={item.place_pic} text=""/>
                        }}
                    />
                    }
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {items, isFetching, done} = state.myTestData
    return {testScreen:{items, isFetching, done}};
}

const mapDispatchToProps = (dispatch) => {
    return {
            getNewItems: () => {
                dispatch(fetchData());
            }
    }
}

export default FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(testScreen)




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
