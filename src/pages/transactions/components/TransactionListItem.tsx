import { IonItem, IonLabel, IonNote } from "@ionic/react";
import "./TransactionListItem.css";
import { Transaction } from "../../../data/transactions";

type Props = {
  transaction: Transaction;
};

const TransactionListItem: React.FC<Props> = ({ transaction }) => {
  return (
    <IonItem detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {transaction.currency}
          <span className="date">
            <IonNote>{transaction.date.toString()}</IonNote>
          </span>
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default TransactionListItem;
