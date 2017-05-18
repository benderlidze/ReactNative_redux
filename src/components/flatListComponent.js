import React, { Component } from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    Text,
    Image,
    deviceWidth,
    View
} from 'react-native';
import PropTypes from 'prop-types';

export default class flatListComponent extends Component{

    image = (img, color) => {
        if (img != null && img.length > 0){
            return <Image source={{ uri: img }} style={[styles.photo, color ? {borderColor:(color)} : {} ]} />
        }else{
            return null
        }
    }

    time = ( time ) =>{
        if (time != null && time.length > 0){
            return <View style={styles.time}><Text style={{fontSize:10, color:"#fff",fontWeight:"bold"}}>{time}</Text></View>
        }else{
            return null
        }
    }

    etype = ( etype, bgColor ) =>{
        if (etype != null ){
            return (
                <View style={{ padding:2,
                    marginLeft:4,
                    backgroundColor: (bgColor),
                    borderColor: (bgColor),
                    borderWidth:1,
                    borderRadius: 5,}} >
                    <Text style={{fontSize:10, color:"#fff",fontWeight:"bold"}}>{etype}</Text>
                </View>)
        }else{
            return null
        }
    }

    renderPrice = (price)=>{
        if (price !== undefined && price.length>1){
            return (
                <View style={{ padding:2,
                    marginLeft:4,
                    backgroundColor: "red",
                    borderColor: "red",
                    borderWidth:1,
                    borderRadius: 5,}} >
                    <Text style={{fontSize:10, color:"#fff",fontWeight:"bold"}}>{price} грн.</Text>
                </View>)
        }else{
            return null
        }
    }

    _onPress = () => {
        console.log("pres");
    }

    render() {
        const {name, id, text, img, time, etype, ecolor, price, place} = this.props;
        return (
                <TouchableHighlight
                    underlayColor="#ccc"
                    style={{ height:100, backgroundColor: '#efefef', borderBottomWidth:1, borderBottomColor: '#ddd', flexDirection:'row',  }}
                    onPress={ ()=>this._onPress() }>
                    <View style={styles.container}>
                        {this.image(img, ecolor)}
                        <View>
                            <View style={styles.timeView}>
                                {this.time(time)}
                                {this.etype(etype,ecolor)}
                                {this.renderPrice(price)}
                            </View>
                            <Text style={styles.text}>
                                { name }
                            </Text>
                            <Text style={styles.smallText}>
                                {place}
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
        );
    }
}

flatListComponent.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    loadingScreen:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:10
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
        padding:2,
        marginLeft:4,
        backgroundColor: '#80bfff',
        borderColor:"#80bfff",
        borderWidth:1,
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
        borderColor:"#fff",
        borderWidth:3,

    },
    section: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        height:25,
        backgroundColor: '#80bfff',
        justifyContent: 'center',
    },
    timeView: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#ccc',
    },
    input: {
        height: 30,
        flex: 1,
        paddingHorizontal: 8,
        fontSize: 15,
        backgroundColor: '#000',
        borderRadius: 2,
        color:"#FFF"
    },
})