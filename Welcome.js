import React from 'react';
import { Text, View, Image, asset} from 'react-vr';
import { StyleSheet } from 'react-native';

const Styles= StyleSheet.create({
    welcomeView: {
        width:3.3,
        height:1,
        backgroundColor: "#d81921",
        transform: [{ translate: [0, 0, -5] }],
        layoutOrigin: [0.8, 2.5],
        flex: 1, 
        flexDirection: 'row'
    },
    welcomeText: {
        color:'#fff',
        fontSize: 0.20,
        fontWeight: "600",
        paddingLeft: 0.2,
        paddingRight: 0.2,
        textAlign: "left",
        textAlignVertical: "center",
    },
    welcomeImage: {
        height:1,
        width:1,
        margin:'auto'
    }

})

const Welcome = (props) => {
    return (
        <View style={Styles.welcomeView}>
            <Image source={asset('emirates-logo.png')}
                    style={Styles.welcomeImage}/>
            <Text style={Styles.welcomeText}>
                VIRTUAL RETAIL STORE
            </Text>
        </View>
    )
}

export default Welcome
