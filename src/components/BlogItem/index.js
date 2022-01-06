// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {title, description, publishedDate} = itemDetails

  return (
    <li className="blog-list-container">
      <div className="title-date-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="desc">{description}</p>
    </li>
  )
}

export default BlogItem
