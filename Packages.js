import React from 'react';
import { Text, View, VrButton, Image, asset} from 'react-vr';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    buyPackage: {
        color:"#fff",
        fontSize:0.06,
        layoutOrigin:[-0.2,-0],
        // transform:[{translate:[0,0,-1]}]
    },
    btnbuy: {
        backgroundColor:'red',
        layoutOrigin:[-0,-1.0],
        width:0.4,
    }
  });

const Packages = (props) => {
    return(
        <View
        style={{
          height:1,
          width:1.5,
          backgroundColor: '#fff',
          layoutOrigin:[0.6,1.2],
          transform: [{
            translate:[1,-1,-2]
          }],
          paddingLeft:0.05,
          zIndex: 288,
          position:'absolute'
        }}>
        <Text style={{color:'#666', fontSize:0.2}}>Packages</Text>
        <View>
            <View>

                <Text style={{color:'#000', fontSize:0.1}}>{props.packagename}</Text>
                <Text style={{color:'#000', fontSize:0.05}}>{props.packageDetails}</Text>
            </View>
            <VrButton style={styles.btnbuy} onClick={props.buypackage}>
                    <Text style={styles.buyPackage}>Buy $500</Text>
            </VrButton>
        </View>
        </View>
    )
}

export default Packages
