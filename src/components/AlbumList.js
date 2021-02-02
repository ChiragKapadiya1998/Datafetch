import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'
class AlbumList extends React.Component{

state={albums:[]}

    componentDidMount(){
       axios.get('https://reqres.in/api/users?page=2') 
       .then(response=> this.setState({albums:response.data.data}))
    }

    reanderAlbums(){
    return this.state.albums.map(album =>  <AlbumDetail data={album}/>)
    }

render(){
    return(
       <ScrollView>
           {this.reanderAlbums()}
       </ScrollView>
    );
}
}
export default AlbumList;

