import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
}

const PlanetSlider = props => {
  const {planetsList} = props
  return (
    <div className="bg-container" data-testid="planets">
      <h1 className="heading"> PLANETS </h1>
      <div className="carousel">
        <Slider {...settings}>
          {planetsList.map(eachPlanet => (
            <PlanetItem details={eachPlanet} key={eachPlanet.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetSlider
