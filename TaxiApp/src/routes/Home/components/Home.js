
import React from "react";
import {View, Text} from "react-native";
import {Container}  from "native-base" ;
import MapContainer from "./MapContainer" ;

class Home extends React.Component{

    componentDidMount(){
        
        this.props.getCurrentLocation() ; 
        console.log("this.props.getCurrentLocation() ; " + JSON.stringify( this.props.region) ) ; 
    }

    componentWillMount(){
        this.props.getCurrentLocation();

    }
    render(){
        const region = {
            latitude : 37.6499422,
            longitude : -77.6171318 ,
            latitudeDelta: 0.0922 , 
            longitudeDelta : 0.0421
        } 
        return (
            <Container>
                {this.props.region.latitude &&
                <MapContainer   region={this.props.region} 
                                getInputData={this.props.getInputData} 
                                toggleSearchResultModal={this.props.toggleSearchResultModal}
                                getAddressPredictions={this.props.getAddressPredictions}
                                resultTypes={this.props.resultTypes}
                                predictions={this.props.predictions}
                />
                }
            </Container>
        ) ;
       
    }
}

export default Home;