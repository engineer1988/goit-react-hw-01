import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendListItem}>
      <img src={avatar} alt="Avatar" width="90" />
      <p className={css.friendListItem_name}>{name}</p>
      <>
        {isOnline ? (
          <p className={css.online}>Online</p>
        ) : (
          <p className={css.offline}>Offline</p>
        )}
      </>
    </div>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
};
export default FriendListItem;
