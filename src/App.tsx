import "./App.css";
import { useState, useEffect, FC } from "react";
import CustomerData from "./components/CustomerData/CustomerData";
import AccountInfo from "./components/AccountInfo/AccountInfo";
import Transactions from "./components/Transactions/Transactions";
import { IAccount, IData } from "./utils/types";

const DATA_FETCH_URL = "db.json";

const App: FC = () => {
  const [data, setData] = useState<IData>();
  const [selectedAccount, setSelectedAccount] = useState<IAccount>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(DATA_FETCH_URL);
        const displayData: IData = await response.json();

        setData(displayData);
        setSelectedAccount(displayData.accounts[0]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  if (!data || !selectedAccount) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <AccountInfo
        accountHolderName={selectedAccount.accountHolderNames}
        accountProviderName={data.providerName}
        countryCode={data.countryCode}
      />
      <CustomerData accounts={data.accounts} selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount} />
      <Transactions transactions={selectedAccount.transactions} />
    </div>
  );
};

export default App;
