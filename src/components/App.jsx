import "./App.css";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import Profile from "./task-1/Profile";
import FriendList from "./task-2/FriendList";
import TransactionHistory from "./task-3/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
