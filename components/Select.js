import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {  Image, Text, View } from "react-native";

export default function Select() {
    return(
        <View>
            <View style = {{marginTop: 20 , marginLeft:20}}>
                <FontAwesome name="bars" size={30} color="grey" />
            </View>
            <View style = {{justifyContent: 'center', marginLeft: 20}}>
                <Text style={{ fontSize : 50 , fontWeight: 'bold' , marginLeft: 30 }}>Select</Text>
                <Text style={{ fontSize : 50 , fontWeight: 'bold' , marginLeft: 50}}>Workout</Text>
            </View>
            <View>
                <Image style={{ width: 80 , height: 80, aspectRatio : 5/2, borderRadius : 20 }} source ={require('../../assets/ab-workouts.jpg')} />

            </View>

        </View>
    )
}
