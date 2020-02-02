# README #

### Welcome to Emirates Virtual store using React VR Project

This README would normally document whatever steps are necessary to get your application up and running.

# What is this repository for?

This repo is to showcase a demo project using React VR.
As a one of the major airline in the world, Emirates group offers several great products to its customers through various retail touch points. 
 
The core objective of this proof of concept is to bring all these retail touch points in to a single touch point by offering highly centralized, greatly personalized, and most intuitive & user friendly Virtual enabled application.
 
The boundary can be expanded to provide
* Providing a self-service solution for each specific retail touch points ex: ticketing outlets, emirates stores, marhaba etc.
* customer identification and profiling based on email, skywards, expandable to biometric.
* A real-time customer related data to which can be used to expand our marketing plans based on customers choices and searches. 
* Additional platform to sell ancillaries


![alt text](https://bytebucket.org/codechargers/vr-store-poc/raw/dd02325853c0dbe2f84a606fa575fc6817add776/static_assets/project.png?token=9440d258199bcb0b32d4900d26df3c0b6e4c4eee)

# How do I get set up? ###
create a project folder and get in there, then do the following,
```
git remote add origin https://codecharger@bitbucket.org/codechargers/vr-store-poc.git
git pull 
npm install //to install dependencies
npm start // to start the server
```


# Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

# Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

# Developer quick notes
* For View elements EVENTS
```
onEnter={ () =>  {console.log('Entered')}}
onExit= {() => {console.log('Exited')}}
onMove= {(event) => {console.log('Moved', event.nativeEvent)}}
onInput= { (event) => {
console.log('type',event.nativeEvent.inputEvent.type);
console.log('eventtype', event.nativeEvent.inputEvent.eventType);
}}
```
* For VrButton
```
onLongClick= { ()=> {console.log('Long Clicked')}}
onButtonPress= { ()=> {
    // execute on button press
}}
onButtonRelease= { ()=> {
    // execute on button press
}}
```

# For CSS styles
```
      
  "alignContent",
  "alignItems",
  "alignSelf",
  "animation",
  "aspectRatio",
  "backfaceVisibility",
  "backgroundColor",
  "borderBottomColor",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderBottomWidth",
  "borderColor",
  "borderLeftColor",
  "borderLeftWidth",
  "borderRadius",
  "borderRightColor",
  "borderRightWidth",
  "borderStyle",
  "borderTopColor",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderTopWidth",
  "borderWidth",
  "bottom",
  "color",
  "direction",
  "display",
  "elevation",
  "flex",
  "flexBasis",
  "flexDirection",
  "flexGrow",
  "flexShrink",
  "flexWrap",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "height",
  "includeFontPadding",
  "justifyContent",
  "layoutOrigin",
  "left",
  "letterSpacing",
  "lineHeight",
  "margin",
  "marginBottom",
  "marginHorizontal",
  "marginLeft",
  "marginRight",
  "marginTop",
  "marginVertical",
  "maxHeight",
  "maxWidth",
  "minHeight",
  "minWidth",
  "opacity",
  "overflow",
  "overlayColor",
  "padding",
  "paddingBottom",
  "paddingHorizontal",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingVertical",
  "position",
  "renderGroup",
  "resizeMode",
  "right",
  "rotation",
  "scaleX",
  "scaleY",
  "shadowColor",
  "shadowOffset",
  "shadowOpacity",
  "shadowRadius",
  "textAlign",
  "textAlignVertical",
  "textDecorationColor",
  "textDecorationLine",
  "textDecorationStyle",
  "textShadowColor",
  "textShadowOffset",
  "textShadowRadius",
  "tintColor",
  "top",
  "transform",
  "transformMatrix",
  "translateX",
  "translateY",
  "width",
  "writingDirection",
  "zIndex"
```