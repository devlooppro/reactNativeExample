import {StyleSheet, Dimensions} from "react-native";

var {height, width} = Dimensions.get('window');

const defaultFontSize = 10;

export const placeholderColor= "";

export const cafeListStyle = StyleSheet.create({
  cafeWrap:{
    margin: 5,
    padding:5,
    backgroundColor:"#fff",
    shadowColor: "#333",
    shadowOffset: {width: 0,height: 3},
    shadowOpacity: 0.6,
    flexDirection:'row'
  },
  imageWrap:{
    paddingRight:5
  },
  image:{
    width:100,
    height:100
  },
  title:{
    fontSize:18
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5a5c6d"
  },
  top: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navigation: {
    height: 100,
    justifyContent: 'center'
  },
  content: {
    flex: 1,
  },
  logo: {
    width: 50,
    height: 67
  },
  companyName: {
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
    fontSize: defaultFontSize * 3,
  },
  button: {
    borderRadius: 40,
    backgroundColor: "#8fd67a",
    padding: 25,
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
    backgroundColor: "#686b7e",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 1,
    flexDirection: 'row'
  },
  inputWrapperTop: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  inputWrapperBottom: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  inputIcon: {},
  iconWrapper: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 25,
    borderRightColor: "#5a5c6d",
    borderRightWidth: 2,
    marginTop: 15,
    marginBottom: 15,
  },
  header:{
    paddingTop: 22,
    justifyContent:'center',
    alignItems:'center',
    height: 60,
    shadowColor: "#333",
    shadowOffset: {width: 0,height: 3},
    shadowOpacity: 0.6,
    backgroundColor:"#fff"
  },
  headerText:{
    fontSize:20
  },
  nav:{
    borderTopWidth:1,
    borderTopColor: "#eee",
    padding:10,
    backgroundColor:"#ddd",
    flexDirection:'row',
    justifyContent: 'space-around'
  },

});

export default styles;