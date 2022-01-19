import "./AccountInfo.css";
import { FC } from "react";

interface IAccountInfo {
  accountHolderName: string;
  accountProviderName: string;
  countryCode: string;
}

const AccountInfo: FC<IAccountInfo> = ({
  accountHolderName,
  accountProviderName,
  countryCode,
}) => {
  return (
    <section className="account-info">
      <h1>Account Holder Name: {accountHolderName}</h1>
      <div>
        <p>
          <b>Account Provider Name:</b> {accountProviderName}
        </p>
        <p>
          <b>Country Code:</b> {countryCode}
        </p>
      </div>
    </section>
  );
};

export default AccountInfo;