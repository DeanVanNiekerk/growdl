import TransactionListItem from "./components/TransactionListItem";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Transactions.css";
import { usePricedTransactions } from "../../hooks";

const Transactions: React.FC = () => {
  const { transactions, isLoading } = usePricedTransactions();

  // useIonViewWillEnter(() => {
  //   const txs = getTransactions();
  //   setTransactions(txs);
  // });

  const refresh = (e: CustomEvent) => {
    // setTimeout(() => {
    //   e.detail.complete();
    // }, 3000);
  };

  return (
    <IonPage id="transactions-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Transactions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Transactions</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {transactions.map((t) => (
            <TransactionListItem key={t.id} transaction={t} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Transactions;
