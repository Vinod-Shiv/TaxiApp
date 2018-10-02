
import React from "react";
import {View, Text} from "react-native";
import {Container}  from "native-base" ;
import MapContainer from "./MapContainer" ;

class Home extends React.Component{

    componentDidMount(){
        this.props.setName() ; 
    }
    render(){
        const region = {
            latitude : 37.6499422,
            longitude : -77.6171318 ,
            latutudeDelta: 0.0922 , 
            longitudeDelta : 0.0421
        } 
        return (
            <Container>
                <MapContainer
                    region={region }>
                  
                </MapContainer>
            </Container>
        ) ;
       
    }
}

export default Home;