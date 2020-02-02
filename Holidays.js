import React from 'react';
import Radium from 'radium';
import { Text, View, VrButton} from 'react-vr';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    brandName: {
        color:"#111",
        fontSize:0.1,
        textAlign:"center",
    },
    brandDesc: {
        color:"#111",
        fontSize:0.06,
        textAlign:"center",
    },
    showPackages: {
        color:"#fff",
        fontSize:0.1,
        layoutOrigin:[-0.2,-0],
    },
    btn: {
        layoutOrigin:[-0.1,-0.9],
        width:1,
        backgroundColor: "red",
    }
  });
const Holidays = (props) => {
    return (
        <View style={{height: 300, width: 600}}>
            <Text style={styles.brandName}>{props.name}</Text>
            <Text style={styles.brandDesc}>{props.desc}</Text>
            <VrButton style={styles.btn} onClick={props.showpackages}>
                <Text style={styles.showPackages}>Start looking</Text>
            </VrButton>
        </View>
    )
}

export default Radium(Holidays)