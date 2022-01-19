import "./CustomerData.css";
import { FC, useMemo } from "react";
import { IAccount, IBalanceStats } from "../../utils/types";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { SelectChangeEvent } from "@mui/material";

interface ICustomerData {
  accounts: IAccount[];
  selectedAccount: IAccount;
  setSelectedAccount: (account: IAccount) => void;
}

const TRANSACTION_INDICATORS = {
  credit: "Credit",
  debit: "Debit",
}

const CustomerData: FC<ICustomerData> = ({
  accounts,
  selectedAccount,
  setSelectedAccount,
}) => {
  const { bankCode, accountNumber } = selectedAccount.identifiers;
  const { available, current } = selectedAccount.balances;

  const calculatedTransactions = useMemo(() => 
    selectedAccount.transactions.reduce((acc, cur) => {
      if (cur.creditDebitIndicator === TRANSACTION_INDICATORS.credit) {
        acc.totalCredit = acc.totalCredit + cur.amount;
      } else if (cur.creditDebitIndicator === TRANSACTION_INDICATORS.debit) {
        acc.totalDebit = acc.totalCredit + cur.amount;
      }

      return acc;
    }, { totalCredit: 0, totalDebit: 0 }), [selectedAccount]);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const selectedAccount = accounts.find((account) => account.accountId === event.target.value);

    if (!selectedAccount) {
      return;
    }

    setSelectedAccount(selectedAccount);
  };

  const renderBalanceData = (balance: IBalanceStats) => (
    <ul>
      <li><b>Amount:</b> {balance.amount}</li>
      <li><b>Credit Debit Indicator:</b> {balance.creditDebitIndicator}</li>
      <li><b>Credit Lines:</b> {balance.creditLines.length === 0 ? "None" : balance.creditLines.join(", ")}</li>
    </ul>
  )

  return (
    <section className="customer-data">
      <div className="customer-data-header">
        <h1>Accounts</h1>
        <FormControl>
          <Select
            labelId="account-select-label"
            id="account-select"
            value={selectedAccount.accountId}
            onChange={handleChange}
          >
            {accounts.map((account) => (
              <MenuItem key={account.accountId} value={account.accountId}>
                {`${accountNumber} - ${bankCode}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Card>
        <CardContent className="customer-card">
          <div>
            <h2>Total Debits and Total Credits</h2>
            <h3>Total Credit: {calculatedTransactions.totalCredit.toFixed(2)}</h3>
            <h3>Total Debit: {calculatedTransactions.totalDebit.toFixed(2)}</h3>
          </div>
          <div>
            <h2>Balances</h2>
            <h3>Available</h3>
              {renderBalanceData(available)}
              <h3>Current</h3>
              {renderBalanceData(current)}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CustomerData;
