import {Component} from 'react'

import './index.css'

class PlaceItem extends Component {
  render() {
    const {item} = this.props
    return (
      <li className="listItem">
        <img className="imageThumbnail" src={item.image_url} alt={item.name} />
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </li>
    )
  }
}

export default PlaceItem
