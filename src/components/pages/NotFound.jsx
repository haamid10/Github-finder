import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8 ">
              Oops!
          </h1>
        </div>
        <p className="text-5xl mb-8">
          404 -page not found!
        </p>
        <Link to='/' className=" btn btn-primary btn-lg">
          <FaHome  className="mx-2"/>Back Home
        </Link>
      </div>
      not found
    </div>
  )
}

export default NotFound
