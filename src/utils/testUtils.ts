export const testMock = {
  providerName: "Dag Site",
  countryCode: "US",
  accounts: [
    {
      accountId: "60241708",
      currencyCode: "USD",
      displayName: "Apollo",
      accountHolderNames: "Mr Apollo Carter",
      accountType: "Personal",
      accountSubType: "CurrentAccount",
      identifiers: {
        accountNumber: "12345678",
        bankCode: "13579111",
        iban: null,
        secondaryIdentification: null,
      },
      parties: [
        {
          partyId: "123456",
          fullName: "Mr Apollo Carter",
          addresses: [],
          partyType: null,
          isIndividual: null,
          isAuthorizingParty: null,
          emailAddress: null,
          phoneNumbers: [],
        },
      ],
      balances: {
        current: {
          amount: 1000.25,
          creditDebitIndicator: "Credit",
          creditLines: [],
        },
        available: {
          amount: 1000.25,
          creditDebitIndicator: "Credit",
          creditLines: [],
        },
      },
      transactions: [
        {
          transactionId: "2022670980",
          description: "Online Payment xxxxxx To  HOME MORTGAGE",
          amount: 800.0,
          creditDebitIndicator: "Debit",
          status: "Booked",
          transactionCode: {
            code: "PAYMENT",
            subCode: "HOME_LOAN_MORTGAGE",
          },
          proprietaryTransactionCode: null,
          bookingDate: "2021-01-05T00:00:00Z",
          merchantDetails: {
            merchantName: null,
            merchantCategoryCode: null,
          },
          enrichedData: {
            category: {
              id: 30016,
              name: "Mortgage payment",
              confidence: 0.948304533958435,
            },
            class: {
              id: 11,
              name: "Payment Transfer",
              confidence: 0.986605584621429,
            },
            predictedMerchantName: null,
          },
        },
        {
          transactionId: "2022670981",
          description: "Online Payment xxxxxx To  HOME MORTGAGE",
          amount: 200.0,
          creditDebitIndicator: "Debit",
          status: "Booked",
          transactionCode: {
            code: "PAYMENT",
            subCode: "HOME_LOAN_MORTGAGE",
          },
          proprietaryTransactionCode: null,
          bookingDate: "2021-01-05T00:00:00Z",
          merchantDetails: {
            merchantName: null,
            merchantCategoryCode: null,
          },
          enrichedData: {
            category: {
              id: 30016,
              name: "Mortgage payment",
              confidence: 0.948304533958435,
            },
            class: {
              id: 11,
              name: "Payment Transfer",
              confidence: 0.986605584621429,
            },
            predictedMerchantName: null,
          },
        },
        {
          transactionId: "2022670982",
          description: "Online Payment xxxxxx To  HOME MORTGAGE",
          amount: 100.0,
          creditDebitIndicator: "Credit",
          status: "Booked",
          transactionCode: {
            code: "PAYMENT",
            subCode: "HOME_LOAN_MORTGAGE",
          },
          proprietaryTransactionCode: null,
          bookingDate: "2021-01-05T00:00:00Z",
          merchantDetails: {
            merchantName: null,
            merchantCategoryCode: null,
          },
          enrichedData: {
            category: {
              id: 30016,
              name: "Mortgage payment",
              confidence: 0.948304533958435,
            },
            class: {
              id: 11,
              name: "Payment Transfer",
              confidence: 0.986605584621429,
            },
            predictedMerchantName: null,
          },
        },
        {
          transactionId: "2022670983",
          description: "Online Payment xxxxxx To  HOME MORTGAGE",
          amount: 123.044545,
          creditDebitIndicator: "Credit",
          status: "Booked",
          transactionCode: {
            code: "PAYMENT",
            subCode: "HOME_LOAN_MORTGAGE",
          },
          proprietaryTransactionCode: null,
          bookingDate: "2021-01-05T00:00:00Z",
          merchantDetails: {
            merchantName: null,
            merchantCategoryCode: null,
          },
          enrichedData: {
            category: {
              id: 30016,
              name: "Mortgage payment",
              confidence: 0.948304533958435,
            },
            class: {
              id: 11,
              name: "Payment Transfer",
              confidence: 0.986605584621429,
            },
            predictedMerchantName: null,
          },
        },
      ],
    },
  ],
};
