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

export interface ITransaction {
  transactionId: string;
  description: string;
  amount: number;
  creditDebitIndicator: string;
  status: string;
  transactionCode: {
      code: string;
      subCode: string;
  },
  proprietaryTransactionCode: string |  null;
  bookingDate: string;
  merchantDetails: {
      merchantName: string |  null;
      merchantCategoryCode: string |  null;
  },
  enrichedData: {
      category: {
          id: number;
          name: string;
          confidence: number;
      },
      class: {
          id: number;
          name: string;
          confidence: number;
      },
      predictedMerchantName: string |  null;
  }
}

export interface IAccount {
  accountId: string;
  currencyCode: string;
  displayName: string;
  accountHolderNames: string;
  accountType: string;
  accountSubType: string;
  identifiers: {
    accountNumber: string;
    bankCode: string;
    iban: string |  null;
    secondaryIdentification: string | null;
  },
  parties: IParty[];
  balances: IBalance;
  transactions: ITransaction[];
}

export interface IData {
  providerName: string;
  countryCode: string;
  accounts: IAccount[];   
}