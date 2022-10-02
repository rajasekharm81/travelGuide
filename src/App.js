import {Component} from 'react'

import Loader from 'react-loader-spinner'

import PlaceItem from './placeItem/index'

import './App.css'

class App extends Component {
  state = {placeItemList: [], isLoading: false}

  componentDidMount() {
    this.getPlacesDetails()
  }

  getPlacesDetails = async () => {
    this.setState({isLoading: true})
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(apiUrl)
    const data = await response.json()
    if (response.ok) {
      this.setState({placeItemList: data.packages, isLoading: false})
    }
  }

  renderLoadingView = () => (
    <div testid="loader">
      <Loader type="TailSpin" color="blue" />
    </div>
  )

  renderContentView = () => {
    const {placeItemList} = this.state
    return (
      <ul className="itemContainer">
        {placeItemList.map(each => (
          <PlaceItem key={each.id} item={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    const rendering = isLoading
      ? this.renderLoadingView
      : this.renderContentView
    return (
      <div className="mainConainer">
        <h1 className="mainHeading">Travel Guide</h1>
        {rendering()}
      </div>
    )
  }
}
export default App
