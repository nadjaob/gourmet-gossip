import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'

// ICON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faStar } from '@fortawesome/free-regular-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'

export default function RecipeCard({ recipe }) {
  console.log(recipe)
  const linkUrl = `/recipes/${recipe._id}`

  return (
    <Col
      lg='3'
      md='4'
      sm='6'
      className="recipes-flex"
    >
      <img src={recipe.image} />
      <div className='recipe-colum'>
        <span className="star-rating">
          {/* {Array(recipe.rating).fill(true).map((_, i) => <FontAwesomeIcon icon={faStar} size="xs" style={{ color: '#fff' }} key={i} />)} */}
          <p>{recipe.avgRating}<FontAwesomeIcon icon={faStar} size="xs" style={{ color: '#FF5F40' }} className='ps-1' /></p>
        </span>
        <p className="diet-button">{recipe.diet}</p>
        <p className="category">{recipe.category}</p>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <FontAwesomeIcon icon={faFire} style={{ color: '#ff5f40' }} />
        <p className="p-next-icon-first">{recipe.difficulty}</p>
        <FontAwesomeIcon icon={faClock} style={{ color: '#FF5F40' }} />
        <p className="p-next-icon-second">{recipe.time} min</p>
        <Link to={linkUrl} className="red-button">SEE RECIPE</Link>
      </div>
    </Col>
  )

}
