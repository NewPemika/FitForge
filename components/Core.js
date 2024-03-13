import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";


export default function Core(props) { 

    const [coreWorkouts , setCoreWorkouts] = useState ([]);

    const loadCoreWorkouts = async () => {
        try{
            let promise = await fetch('');
            let data = await promise.json();
            console.log("Load Data : " , data);
          //SET STATE
            setCoreWorkouts(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }  

    useEffect(() => {
        loadCoreWorkouts();
    }, []);


    return (
        <View>
            <View style = {{marginTop: 20 , marginLeft:20}}>
                <FontAwesome name="bars" size={30} color="grey" />
            </View>
            <View style = {{justifyContent: 'center', marginLeft: 20}}>
                <Text style={{ fontSize : 50 , fontWeight: 'bold' , marginLeft: 30 }}>Core</Text>
                <Text style={{ fontSize : 50 , fontWeight: 'bold' , marginLeft: 50}}>Exercise</Text>
            </View>
            <FlatList
                horizontal={true}
                // data={tours}
                data = { onlineEvents }
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View>


                            </View>
                            
                        );
                    }
                }
                keyExtractor={item => item.id}
            
            />
            






            
            

        </View>






    );
}