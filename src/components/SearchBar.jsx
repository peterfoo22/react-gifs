import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      query: " ",
      loading: false,
      message: ''
    };

    this.handleChange = this.handleChange.bind(this)

  }

fetchSearchResults = (query) => {
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=0koQw7DWzliqNfVyvB95mA5XUT6Z5eIE&limit=5&q= ${query} `)
    .then(response => response.json())
    .then((info) => {
      this.setState( {results:info} );
  });
}

handleChange (event) {
  const searchWord = event.target.value
  this.setState({
    query: event.target.value, loading: true, message: ""
  }, ()=> { this.fetchSearchResults(searchWord)})

}

renderSearchResults = () => {
  const ourResults = (this.state.results.data)

    if(ourResults){
      return (
        <div className = "image-container">
          {ourResults.forEach(result =>{

          })}
        </div>
      )
    }

}


  render() {

    const {query} = this.state
    return (

      <div>
          <form onSubmit={this.handleSubmit}>


              <input type="text"
                     placeholder = "Search GIFS"
                     value = {query}
                     onChange = {this.handleChange}
              />


          </form>

        {this.renderSearchResults()}
      </div>

    );

  }
};


export default SearchBar;
