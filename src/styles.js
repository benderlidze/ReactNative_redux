import {StyleSheet, deviceWidth} from 'react-native';

export default styles = StyleSheet.create({
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
    flatListContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        margin:2,
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