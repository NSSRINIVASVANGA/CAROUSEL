import './index.css'

const PlanetItem = props => {
  const {details} = props
  return (
    <div className="card">
      <img
        src={details.imageUrl}
        alt={`planet ${details.name}`}
        className="image"
      />
      <h1 className="heading-2"> {details.name} </h1>
      <p className="desc"> {details.description} </p>
    </div>
  )
}

export default PlanetItem
