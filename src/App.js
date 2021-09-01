import './App.css';
import { Component } from 'react';
import { Searchbar } from './components/Searchbar';
import { ImageGallery } from './components/ImageGallery';
import { Button } from './components/Button';
import { Spinner } from './components/Spinner';
import { Modal } from './components/Modal';

class App extends Component {

  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    error: null,
    imageForModal: '',
    showModal: false,
    isLoading: false,
  };

  fetchImage = () => {
    this.setState({ isLoading: true });
    const API_KEY = '23106414-1912ab188e9ddc39eb325727f';
    const url = `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    fetch(url).then(response => {
      return response.json();
    }).then(data => {
      this.setState(
        (prevState) => ({
          images: [...prevState.images, ...data.hits],
          currentPage: prevState.currentPage + 1,
          isLoading: false
        })
      );
    }).catch(error => {
      this.setState({ error: error });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery && this.state.searchQuery !== '') {
      this.fetchImage(this.state.searchQuery);
    }
  }

  onChangeFilter = search => {
    this.setState({
      images: [],
      searchQuery: search,
      currentPage: 1,
      error: null,
    })
  }


  onimageClick = (evt) => {
    const a = this.state.images.find(image => (image.id == evt.currentTarget.id));
    this.setState({
      imageForModal: a.largeImageURL,
      showModal: true
    })
  }

  handleBackClick = (evt) => {
    this.setState({
      imageForModal: '',
      showModal: false
    })
  }


  render() {
    return (
    <div className="App">
      <header className="App-header">
        
          <Searchbar onSubmit={this.onChangeFilter} />
          <ImageGallery images={this.state.images} imageClick={this.onimageClick} />
          {this.state.isLoading && <Spinner />}
          {this.state.images.length > 0 ? !(this.state.showModal) && <Button currentPage={this.state.currentPage} onSubmit={this.fetchImage} /> : ''}
          {this.state.showModal && <Modal className='modal' image={this.state.imageForModal} click={this.handleBackClick} />}

      </header>
      </div>
    )
  }
    
}

export default App;
