import { IonItem, IonLabel, IonNote } from "@ionic/react";
import "./TransactionListItem.css";
import { PricedTransaction } from "../../../types";

type Props = {
  transaction: PricedTransaction;
};

const TransactionListItem: React.FC<Props> = ({ transaction }) => {
  return (
    <IonItem detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {transaction.symbol} - {transaction.currentPriceBtc}
          <span className="date">
            <IonNote>{transaction.date.toString()}</IonNote>
          </span>
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default TransactionListItem;
