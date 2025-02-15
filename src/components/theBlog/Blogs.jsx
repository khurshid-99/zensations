
import BlogBrands from "./blogItems/BlogBrands"
import BlogCards from "./blogItems/BlogCard"
import TheBlog from "./blogItems/TheBlog"


const Blog = () => {
  return (
    <div className="w-full min-h-screen py-[5vw] ">
        <TheBlog />
        <BlogCards />
        <BlogBrands />
    </div>
  )
}

export default Blog