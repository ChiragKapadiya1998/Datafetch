import React from 'react';
import {View,Text, Button} from 'react-native';

class AlbumList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'chirag',
            title:'change',
            changName:true
        };
        this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount(){
        console.log("componentDidMount in AlbumsList  s"  );
    }

    handleChange(){
        this.setState({name:'chirag kapadiya'});
        this.setState({title:'changed...'})
        this.setState({changName:false})
    }

render(){
    return(
       <View>
           <Text>Albums.....! {this.state.name}</Text>
           <Button title={this.state.changName===false? this.state.title : this.state.title } onPress={this.handleChange}/>
       </View>
    );
}
}
export default AlbumList;

