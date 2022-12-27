import PropTypes from "prop-types"
function UserItem({user: {login, avatar_url}}) {
  return (
    <div>
      user
    </div>
  )
}
UserItem.PropTypes ={
  user: PropTypes.object.isRequired,
}

export default UserItem
