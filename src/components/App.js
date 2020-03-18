import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./movieItem";
//import {API_URL, API_KEY_3} from "../utils/api"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch:[]
    };
    console.log("constructor")
  }
  
  // componentDidMount(){
  //   console.log("didMount")
  //   fetch('${API_URL}/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397")
  // }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function(item) {
      return item.id !== movie.id;
    });
    console.log(updateMovies);
    //this.state.movies = updateMovies;
    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = movie =>{
     console.log(movie);
     //this.state.moviesWillWatch.push(movie);
    //  const updateMovies =[...this.state.moviesWillWatch];
    //  updateMovies.push(movie);
     const updateMovies =[...this.state.moviesWillWatch,movie];
    

     this.setState({
       moviesWillWatch: updateMovies
     });
  };

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item) {
      return item.id !== movie.id;
    });
    //this.state.movies = updateMovies;
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  render() {
    console.log("render")
    console.log("render", this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 nb-4" key={movie.id}>
                    <MovieItem movie={movie} removeMovie={this.removeMovie} addMovieToWillWatch = {this.addMovieToWillWatch} removeMovieFromWillWatch = {this.removeMovieFromWillWatch}/>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will Watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

// function App() {
//   return <div >{moviesData[0].title}</div>;
// }

export default App;
