import PropTypes from "prop-types";
import css from "./TransactionHistoryItem.module.css";

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.item}>{type}</td>
      <td className={css.item}>{amount}</td>
      <td className={css.item}>{currency}</td>
    </>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistoryItem;
