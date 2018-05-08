import {StyleSheet, Dimensions} from "react-native";

var {height, width} = Dimensions.get('window');

const defaultFontSize = 10;

const shadow = {
  shadowColor: "#333",
  shadowOffset: {width: 0, height: 3},
  shadowOpacity: 0.6,
}


export const generalStyle = StyleSheet.create({
  loading: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 18,
    color: "#000"
  }
});

export const profileStyle = StyleSheet.create({
  avatarButton: {
    margin: 15  ,
    padding: 5,
    backgroundColor:'#fff',
    position:'relative',
    ...shadow
  },
  avatar: {
    borderWidth: 1,
    borderColor: '#c0392b',
    width: 100,
    height: 100
  },
  avatarEditIcon:{
    position:'absolute',
    bottom: 7,
    right: 7
  },
  editSettings:{
    margin:10,

    paddingTop:10,
    paddingBottom:30,
    backgroundColor: '#fff',
    ...shadow
  },
  editSettingsButton:{
    marginTop:15
  }
});

export const cafeItemStyle = StyleSheet.create({
  mainImage: {
    width: "100%",
    height: 250
  },
  title: {
    color: "red",
    fontSize: 20
  },
  titleLine: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rating: {
    flexDirection: 'row'
  }

});
export const cafeListStyle = StyleSheet.create({
  cafeWrap: {
    margin: 5,
    padding: 5,
    backgroundColor: "#fff",
    flexDirection: 'row',
    ...shadow
  },
  imageWrap: {
    paddingRight: 5
  },
  image: {
    width: 100,
    height: 100
  },
  title: {
    fontSize: 18
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1"
  },
  top: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navigation: {
    height: 80,
    justifyContent: 'center'
  },
  content: {
    flex: 1,
  },
  logo: {
    width: 270,
    height: 135
  },
  companyName: {
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
    fontSize: defaultFontSize * 3,
  },
  button: {
    borderRadius: 40,
    backgroundColor: "#c0392b",
    padding: 15,
    marginLeft: 30,
    marginRight: 30,
  },

  buttonInside: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 1.5 * defaultFontSize
  },
  inputWrapper: {
    height: 60,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 1,
    flexDirection: 'row',
    borderBottomColor: "#bdc3c7",
    borderBottomWidth: 1
  },
  inputWrapperTop: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  inputWrapperBottom: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  textInput: {
    flex: 1
  },
  iconWrapper: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  header: {
    paddingTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: "#333",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.6,
    backgroundColor: "#fff"
  },
  headerText: {
    fontSize: 20
  },
  nav: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    padding: 10,
    backgroundColor: "#ddd",
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  signUpLink: {
    alignSelf: 'center',
    color: '#3498db',
    fontSize: 18,
    marginTop: 10
  }
});

export default styles;