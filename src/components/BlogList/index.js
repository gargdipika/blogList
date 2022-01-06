// Write your JS code here
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul>
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} itemDetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
