import { TouchableOpacity,ScrollView, View, Text, Image} from "react-native";
import React, { Component } from "react";
import Layout from "../components/layout"
import { Actions } from 'react-native-router-flux';

import { cafeListStyle }  from "../themes/styles";

import { getCafes } from "../actions/cafeActions";

class listScene extends Component {

  constructor(){
    super();
    this.state ={cafes:[]}
  }

  componentWillMount(){
    getCafes().then(cafes=>{
      this.setState({ cafes })
    })
      .catch(error=>{
        console.log(error);
      })
  }

  itemPress(index){
    Actions.item({index})
  }

  renderCafes(){
    return this.state.cafes.map(cafe => (
      <TouchableOpacity style={cafeListStyle.cafeWrap} key={cafe.id}>
        <View style={cafeListStyle.imageWrap}>
          <Image style={cafeListStyle.image}
                 source={ cafe.image } />
        </View>
        <View>
          <Text style={cafeListStyle.title}>{cafe.name}</Text>
          <Text>{cafe.description}</Text>
        </View>

      </TouchableOpacity>
      )
    );
  }

  render(){
    return (
      <Layout>
        <ScrollView>
          {this.renderCafes()}
        </ScrollView>
      </Layout>
    )
  }
}

export default listScene;