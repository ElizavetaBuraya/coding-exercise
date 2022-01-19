import "./Transactions.css";
import React, { FC, useState, useCallback, useEffect, ChangeEvent } from "react";
import { ITransaction } from "../../utils/types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

interface ITransactions {
  transactions: ITransaction[];
  currency: string;
}

const PAGE_SIZE = [25, 50, 100];

const Transactions: FC<ITransactions> = ({
  transactions,
  currency,
}) => {
  const [pageSize, setPageSize] = useState<number>(25);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [visibleTransactions, setVisibleTransactions] = useState<ITransaction[]>([]);

  const handleSetVisibleTransactions = useCallback(() => {
    const firstVisibleElementIndex = pageSize * (currentPage - 1);

    setVisibleTransactions(transactions.slice(firstVisibleElementIndex, firstVisibleElementIndex + pageSize - 1));
  }, [currentPage, pageSize, transactions]);


  useEffect(() => {
    handleSetVisibleTransactions();
  }, [handleSetVisibleTransactions]);

  const renderTransaction = (transaction: ITransaction) => {
    return (
      <Card key={transaction.transactionId} className="transaction-card">
        <CardContent className="transaction-card-content">
          <p>{transaction.description}</p>
          <p>{`${transaction.amount} ${currency}`}</p>
          <p>{new Date(transaction.bookingDate).toLocaleDateString()}</p>
        </CardContent>
      </Card>
    );
  }

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) {
      handleSetVisibleTransactions();
    } else {
      const filteredTransactions = visibleTransactions.filter((transaction) => transaction.description.toLowerCase().includes(event.target.value.toLowerCase()));
      setVisibleTransactions(filteredTransactions);
    }
  }

  return (
    <section className="transactions">
      <h1>Transactions</h1>
      <div className="transactions-controls">
        <TextField
          id="search-textfield"
          label="Search"
          className="transactions-search"
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      <FormControl>
        <Select
          labelId="select-page-size-label"
          id="select-page-size"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {PAGE_SIZE.map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      <div className="transactions-table">
        <div className="transactions-header">
          <p>Description</p>
          <p>Amount</p>
          <p>Date</p>
        </div>
        <div className="transactions-content">
          {visibleTransactions.map((transaction) => renderTransaction(transaction))}
        </div>
        <Stack spacing={2}>
          <Pagination 
            className="transactions-pagination" 
            count={10} 
            variant="outlined" 
            shape="rounded" 
            page={currentPage} 
            onChange={handleChange} 
          />
        </Stack>
      </div>
    </section>
  );
};

export default Transactions;
