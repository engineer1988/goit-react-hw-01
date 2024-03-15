import css from "./TransactionHistory.module.css";
import TransactionHistoryItem from "../task-3-item/TransactionHistoryItem";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.table_item}>Type</th>
          <th className={css.table_item}>Amount</th>
          <th className={css.table_item}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id} className={css.card}>
              <TransactionHistoryItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
