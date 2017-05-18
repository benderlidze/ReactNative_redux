import React, { Component } from 'react';
import {
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    Text,
    View
} from 'react-native';
import PropTypes from 'prop-types';

export default class item extends Component{

    render() {
        const {itemsArray} = this.props;
        return (
            <View style={{margin:10, padding:5}}>
                {
                    itemsArray.map((item, key) => {
                        return (
                            <View key={key} >
                                <Text>{item.name}</Text>
                                <Text>{item.place_id}</Text>
                            </View>
                                )
                    })
                }
            </View>
        );
    }
}

item.propTypes = {
    itemsArray: PropTypes.array.isRequired
}





