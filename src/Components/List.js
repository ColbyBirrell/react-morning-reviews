import React, { Component } from 'react'
import ListItem from './ListItem'
import movies from '../data/movies.json'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: movies,
    }
  }

  render() {

    const moviesList = this.state.movies.map((element) => {
      return <ListItem movie={element} key={element.id} />
    })


    return (
      <div className="List">
        {moviesList}
      </div>)
  }
}
export default List
