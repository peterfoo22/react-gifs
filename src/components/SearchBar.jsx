import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      query: " ",
      loading: false,
      imageChosen: ''
    };

    this.handleChange = this.handleChange.bind(this)
    this.pickImage = this.pickImage.bind(this)

  }

fetchSearchResults = (query) => {
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=0koQw7DWzliqNfVyvB95mA5XUT6Z5eIE&limit=5&q= ${query} `)
    .then(response => response.json())
    .then((info) => {
      this.setState( {results:info} );
  });
}

handleChange (event) {
  const searchWord = event.target.value;
  this.setState({
    query: event.target.value, loading: true, message: ""
  }, () => { this.fetchSearchResults(searchWord)});

}

pickImage (event) {
  const imageLink = event.target.src;
  this.setState({
    imageChosen: imageLink
  });
}

renderPickedImage = () => {
  return (
      <div>
        <iframe src={this.state.imageChosen}
                            frameBorder="0"
                            className="picked-giphy"
                            allowFullScreen >
        </iframe>
      </div>
  )
}

renderSearchResults = () => {
  const ourResults = (this.state.results.data);

    if(ourResults){
      return (
        <div className = "image-container">
          {ourResults.map(result =>{
            return  <div key = {result.id} className = "img-wrapper">
                      <iframe src={result.embed_url}
                        frameBorder="0"
                        className="giphy-embed"
                        allowFullScreen
                        onMouseOver = {this.pickImage}>
                      </iframe>
                    </div>
          })}
        </div>
      )
    }

}


  render() {

    const {query} = this.state
    return (
      <div className = "otherBox">
          <form>
            <input type="text"
                   placeholder = "Search GIFS"
                   value = {query}
                   onChange = {this.handleChange}
            />
          </form>

        {this.renderSearchResults()}
        {this.renderPickedImage()}
      </div>
    );

  }
};


export default SearchBar;
