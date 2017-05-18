import React, { Component } from 'react';
import { connect } from "react-redux";
import {loadWebcams, increase} from "../actions/index"
import {
    AppRegistry,
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    ActivityIndicator
} from 'react-native';

import styles from "../styles"

let width=0;
class ScreenHome extends Component{

    static navigationOptions = {
        title: 'ScreenHome',
    };

    constructor(props){
        super(props)
        console.log("PROPS: ",props);
    }

    componentDidUpdate(){
        width = Dimensions.get('window').width;
    }

    button = () => <Button
        title="Load feed"
        onPress={() => {this.props.loadFeed()}}
    />

    renderFooter = () => {
        if (!this.props.webcams.loading) return null;

        return (
            <View
                style={{
              paddingVertical: 20,
              borderTopWidth: 1,
              borderColor: "#CED0CE"
            }} >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    render() {
        const { navigate } = this.props.navigation;
        const {webcams} = this.props;

        let lastId = 0;

        return (
            <View>

                <FlatList
                    data={this.props.webcams.items}
                    keyExtractor={(item,key) => {return key}}
                    onEndReached={()=>{
                        {/*console.log("============END=============");*/}
                        {/*console.log(lastId);*/}
                        {/*let newA = [];*/}
                        {/*webcams.items.map((val)=>{*/}
                            {/*newA.push(val.id);*/}
                        {/*});*/}
                        {/*console.log("UNIQUE:",[...new Set(newA)].length);*/}
                        if (!webcams.loading){
                            this.props.loadFeed("?max_id="+lastId)
                        }
                    }}
                    ListHeaderComponent={this.button}
                    ListFooterComponent={this.renderFooter}
                    refreshing={this.props.webcams.loading}
                    renderItem={
                        ({item}) => {
                            let img = item.images.standard_resolution.url;
                            lastId = item.id;
                            return (
                                <View style={styles.flatListContainer} >
                                    <Image
                                        style={{width: width/2-35, height: width/2-35}}
                                        source={{uri:img}}/>
                                     <View style={{padding:10}}>
                                        <Text>{item.caption.text}</Text>
                                     </View>
                                </View>
                                )
                        }
                    }
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {items, isFetching, done} = state.myTestData
    const {language} = state.language
    const {webcams} = state;
    return {
        testScreen:
            {items, isFetching, done},
        curState: state,
        lang: language,
        webcams
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadFeed: (param="")=>{
            dispatch(loadWebcams(param))
        },
        increase: (number)=>{dispatch(increase(number))}
    }
}


export default ScreenHomeRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreenHome)



