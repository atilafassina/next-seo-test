import React, { Component } from 'react'
import Navigation from '../../components/Navigation/container'
import Giphy from '../../components/Footer/container'
// import Offer from '../../components/Offer/container'
export default class PageView extends Component {
  render(props) {
    return (
      <div>
        <Navigation />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime debitis dolorem sapiente, assumenda, libero tempora a, perferendis nemo error architecto ipsam. Veniam ipsam praesentium debitis nemo animi consectetur fugiat, labore qui delectus. Omnis enim harum temporibus earum eveniet similique veniam et! Tempora sapiente quisquam, tenetur aspernatur minus repudiandae illo, corporis!
        </p>
        <Giphy />
    </div>)
  }
}