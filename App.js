import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image,
  PointLight,
  Sphere,
  Box,
  Cylinder,
  Plane,
  VrButton,
  LiveEnvCamera,
  Animated,
  Video,
  VideoControl,
  MediaPlayerState
} from "react-vr";

import Radium from "radium";
import { StyleSheet } from "react-native";
import CylindricalPanel from "CylindricalPanel";
import Packages from "./Packages";

let purchased;

buyPackageHandler = async () => {
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
  const json = await res.json();
  console.log(json);
  this.purchased = json.length;
  console.log(this.purchased);
};

const App = props => {
  const styles = {
    buyPackage: {
      color: "#fff",
      fontSize: 0.4,
      layoutOrigin: [-0.2, -0]
    },
    btnbuy: {
      layoutOrigin: [0.18, -0.2],
      width: 3.2
    },
    videoview: {
      height: 3,
      width: 5,
      layoutOrigin: [1, 0.3],
      position: "absolute",
      transform: [{ translate: [0, 0, -5] }]
    }
  };

      
  return (
  
    <View>
      <Pano
        source={asset("chess-world.jpg")}
        onLoad={() => {}}
        style={{ transform: [{ rotateY: 10 }] }}
      />

      <View style={styles.videoview}>
        <Video
          style={{width:5, height:3}}
          source={asset("elephants-dream.webm")}
          playerState={new MediaPlayerState({ autoPlay: true, muted: true })}
        />
        <VideoControl
          style={{ height: 0.2, width: 5 }}
          playerState={new MediaPlayerState({ autoPlay: true, muted: true })}
        />
      </View>

      <View
        style={{
          width: 3.3,
          height: 1,
          backgroundColor: "#d81921",
          transform: [{ translate: [0, 0, -5] }],
          layoutOrigin: [0.8, 2.5],
          flex: 1,
          flexDirection: "row"
        }}
      >
        <VrButton style={styles.btnbuy} onClick={props.showHome}>
          <Text style={styles.buyPackage}>Get to MainScreen</Text>
        </VrButton>
      </View>
      <Packages
        packagename="Disneyland® Paris"
        buypackage={this.buyPackageHandler}
        hidepackages={this.mainscreen}
        packageDetails="Feel the magic like never before as Disneyland® Paris has turned spectacularly sparkly to celebrate its 25th Anniversary. Special new attractions, shows and a star-studded parade make this a once-in-a-lifetime experience that will leave you starry-eyed for years to come. "
      />
     { this.purchased === 5 ?
     <View
      style={{
        width: 3,
        height: 0.5,
        backgroundColor: "#dff0d8",
        borderRadius: 0.1,
        transform: [{ translate: [0, 0, -5] }],
        layoutOrigin: [-0.2, -4],
        position: "absolute",
        zIndex: 222
      }}
    >
      <Text style={{ color: "#3c763d", fontSize: 0.2, marginLeft: 0.2 }}>
        Thanks for your purchase! Wishing you a wonderful time
      </Text>
    </View> : null
     }

    </View>
  );
};

export default App;
