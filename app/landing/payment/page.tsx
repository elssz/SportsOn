import PaymentSteps from "../components/payment/payment-steps";
import PaymentOptions from "../components/payment/payments-options";


const Payment = () => {
  return (
    <main className="bg-gray-200 min-h-[80vh] ">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-10">Payment</h1>
        <div className="grid grid-cols-2 gap-14">
          <PaymentOptions/>
          <PaymentSteps/>
        </div>
      </div>
    </main>
  );
};

export default Payment;
