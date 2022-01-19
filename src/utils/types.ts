interface IParty {
  partyId: string;
  fullName: string;
  addresses: string[],
  partyType: string |  null;
  isIndividual: boolean |  null;
  isAuthorizingParty: boolean |  null;
  emailAddress: string |  null;
  phoneNumbers: string[];
}

export interface IBalanceStats {
  amount: number;
  creditDebitIndicator: string;
  creditLines: string[]
}

export interface IBalance {
  current: IBalanceStats;
  available: IBalanceStats;
}

interface ITransactionCode {
  code: string;
  subCode: string;
}

interface IMerchantDetails {
  merchantName: string |  null;
  merchantCategoryCode: string |  null;
}

interface IEnrichedDataDetails {
  id: number;
  name: string;
  confidence: number;
}

interface IEnrichedData {
  category: IEnrichedDataDetails;
  class: IEnrichedDataDetails;
  predictedMerchantName: string |  null;
}

export interface ITransaction {
  transactionId: string;
  description: string;
  amount: number;
  creditDebitIndicator: string;
  status: string;
  transactionCode: ITransactionCode;
  proprietaryTransactionCode: string |  null;
  bookingDate: string;
  merchantDetails: IMerchantDetails;
  enrichedData: IEnrichedData;
}

interface IIdentifiers {
  accountNumber: string;
  bankCode: string;
  iban: string |  null;
  secondaryIdentification: string | null;
}

export interface IAccount {
  accountId: string;
  currencyCode: string;
  displayName: string;
  accountHolderNames: string;
  accountType: string;
  accountSubType: string;
  identifiers: IIdentifiers;
  parties: IParty[];
  balances: IBalance;
  transactions: ITransaction[];
}

export interface IData {
  providerName: string;
  countryCode: string;
  accounts: IAccount[];   
}