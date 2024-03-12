// import PropTypes from "prop-types";

// const Profile = () => <h1>Hello!</h1>;
const Profile = ({ name, tag, location, image, stats }) => (
  <div>
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>

    <ul>
      <li>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{stats.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

// Profile.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   location: PropTypes.number.isRequired,
//   tag: PropTypes.string.isRequired,
// };
export default Profile;
