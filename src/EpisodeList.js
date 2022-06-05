import React from "react";
import axios from "axios";

class EpisodeList extends React.Component{
    state ={
        EpisodeList : [],
    }

    async componentDidMount(){
        const apiUrl = "http://api.tvmaze.com/singlesearch/shows"
        const params = { q: 'mr-robot', embed: 'episodes' };
     try{
         const response = await axios.get(apiUrl, { params });
         const { data: {_embedded: {episodes}}} =response;
         this.setState({
             episodes:episodes,
         });            
           
       }catch(error) {
            console.error(error);
    }
               

    }
    render(){        
        return (
            <div><h1>EpisodeList</h1>     
            </div>
        )
    }
}

export default EpisodeList;