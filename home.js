import React,{Component} from 'react';
import {View,Text,Flatlist,StylSheet,Alert,SafeAreaView} from 'react-native'
export default class HoomerScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            listData:[],
            url:'http://localhost:5000/',
        }
    }
    componentDidMount(){
        this.getPlanets();
    }
    getPlanets = ()=>{
        const{url} = this.state;
        axios
        .get(url)
        .then(Response=>{
            return this.setState({
                listData:response.data.data 
            })
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    render(){
        return(
            <View>
                 <Text>HomeScreen</Text>
            </View>
        )
    }
}