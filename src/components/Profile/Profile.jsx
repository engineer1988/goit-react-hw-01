import PropTypes from "prop-types";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => (
  <div className={css.profile}>
    <div className={css.profile_card}>
      <img className={css.profile_foto} src={image} alt={name} />
      <p className={css.profile_name}>{name}</p>
      <p className={css.profile_tag}>@{tag}</p>
      <p className={css.profile_location}>{location}</p>
    </div>

    <ul className={css.list}>
      <li className={css.list_item}>
        <span>Followers</span>
        <span className={css.list_item_span}>{stats.followers}</span>
      </li>
      <li className={css.list_item}>
        <span>Views</span>
        <span className={css.list_item_span}>{stats.views}</span>
      </li>
      <li className={css.list_item}>
        <span>Likes</span>
        <span className={css.list_item_span}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  location: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};
export default Profile;
