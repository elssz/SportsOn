import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";

const paymentList = [
  {
    bank_name: "BCA",
    account_number: 123123123,
    account_holder: "PT SportsOn Digital",
  },
  {
    bank_name: "Mandiri",
    account_number: 123123123,
    account_holder: "PT SportsOn Digital",
  },
  {
    bank_name: "Seabank",
    account_number: 123123123,
    account_holder: "PT SportsOn Digital",
  },
];

const PaymentOptions = () => {
  return (
    <CardWithHeader title="Payments Options">
      {paymentList.map((payment, index) => (
        <div className="flex gap-5 p-5 border-b  border-gray-100" key={index}>
          <div className="bg-blue-100 p-4 text-blue-600 ">
            <FiCreditCard size={20} />
          </div>
          <div className="selfcenter ">
            <div className="font-bold">{payment.bank_name}</div>
            <div className="text-sm">{payment.account_number}</div>
            <div className="text-xs text-gray-600 opacity-70">
              {payment.account_holder}
            </div>
          </div>
          <div className=" ml-auto self-center bg-blue-50 text-xs text-[#3E3E3E] h-fit px-2 py-1 ">
            Bank Transfer
          </div>
        </div>
      ))}
    </CardWithHeader>
  );
};

export default PaymentOptions;
