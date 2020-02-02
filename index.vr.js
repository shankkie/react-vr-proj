import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
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
  Animated
} from "react-vr";

import Radium from "radium";
import { StyleSheet } from "react-native";
import CylindricalPanel from "CylindricalPanel";
import Holidays from "./Holidays";
import Packages from "./Packages";
import Welcome from "./Welcome";
import App from './App';

export default class VR_ek extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: new Animated.Value(0),
      showCancel: false,
      backgroundImages: "business-lounge",
      brandDetails: [
        {
          name: "Emirates Holidays",
          desc:
            "We're always looking for new ways to inspire your next holiday - fascinating destinations, unique hotels and all the little things that come together to create unforgettable moments for you and your family."
        },
        {
          name: "Emirates Airlines",
          desc:
            "Emirates is an airline based in Dubai, United Arab Emirates. The airline is a subsidiary of The Emirates Group, which is wholly owned by the government of Dubai's Investment Corporation of Dubai"
        },
        {
          name: "Marhaba",
          desc:
            "marhaba provides a meet & greet service and airport lounges for arrivals, departures and transfers at Dubai, Al Maktoum and Bahrain International airports."
        }
      ]
    };
  }
  componentDidMount() {
    Animated.timing(this.state.fadeIn, {
      toValue: 1,
      duration: 3000
    }).start();
  }
  
  toggleButtonHandler = () => {
    this.setState({
      showCancel: true,
    });
  };
  
  hideButtonHandler = () => {
    this.setState({
      showCancel: false,
    });
  };

  MainView = () => {
    if (!this.state.showCancel) {
      const brandDivs = {
        height: 2,
        width: 1.2,
        flex: 1,
        flexDirection: "row",
        marginRight: 2,
        opacity: this.state.fadeIn,
        backgroundColor: "#fff",
        layoutOrigin: [0.1, 1.8],
        transform: [
          {
            translate: [1, -1, -3]
          }
        ]
      };
      const CycImages = {
        height: 300,
        width: 400,
        borderColor: "#111",
        borderWidth: 5,
        borderRadius: 10
      };
      return (
        <View>
        <Pano
          source={asset(this.state.backgroundImages+'.jpg')}
          onLoad={() => {
            console.log("completed");
          }}
          style={{ transform: [{ rotateY: 10 }] }}
        />
        <Welcome />
        <View
          style={{
            opacity: 1,
            width: 2000,
            height: 720
          }}
        >
          {this.state.brandDetails.map((data, index) => {
            return (
              <CylindricalPanel
                layer={{ width: 2000, height: 720 }}
                style={{ position: "absolute" }}
                key={index}
              >
                <Animated.View style={brandDivs} onInput={event => {}}>
                  <VrButton>
                    <Image
                      source={asset("emirates-airlines.jpg")}
                      style={CycImages}
                    />
                    <Text>VIRTUAL RETAIL STORE</Text>
                  </VrButton>
                  <VrButton>
                    <Image source={asset("marhaba.jpg")} style={CycImages} />
                  </VrButton>
                  <VrButton>
                    <Image source={asset("dnata.jpg")} style={CycImages} />
                  </VrButton>
                  <VrButton onClick={this.toggleButtonHandler}>
                    <Image
                      source={asset("dubai_holidays.jpg")}
                      style={CycImages}
                    />
                  </VrButton>
                  <VrButton>
                    <Image
                      source={asset("dubaidutyfree.jpg")}
                      style={CycImages}
                    />
                  </VrButton>
                </Animated.View>
              </CylindricalPanel>
            );
          })}
        </View>
      </View>
      )
    }
  }
  renderView = () => {
    if (this.state.showCancel) {
      return (
        <View>
          <App showHome={this.hideButtonHandler}/>
        </View>
      );
    } else {
      return null;
    }
  };
  render() {
    
    return (
        <View>
        {this.renderView()}
        {this.MainView()}
        </View>
    );
  }
}

AppRegistry.registerComponent("VR_ek", () => Radium(VR_ek));
