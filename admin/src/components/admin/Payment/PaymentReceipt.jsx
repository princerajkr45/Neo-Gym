import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentReceipt = () => {
  // Get the payment data passed from PaymentForm
  const location = useLocation();
  const paymentData = location.state?.data || {};
  console.log(paymentData)

  const {
    member = {},
    amountPaid = 0,
    paymentDate = "",
    chosenService = "",
    plan = "",
  } = paymentData;

  const { fullName = "" } = member;

  // Generate a random invoice number
  const generateInvoiceNumber = () => {
    const randomNum = Math.floor(Math.random() * 10000000); // Generate a random number
    return `GMS_${randomNum}`;
  };

  // Format the current date (for Paid On section)
  const currentDate = new Date().toLocaleString();

  // Format the payment date (Last Payment section)
  const formattedPaymentDate = paymentDate
    ? new Date(paymentDate).toLocaleDateString()
    : "";

  // Determine the Valid Upto based on the plan
  const getValidUpto = () => {
    switch (plan) {
      case "basic":
        return "1 Month/s";
      case "standard":
        return "3 Month/s";
      case "premium":
        return "12 Month/s";
      default:
        return "N/A";
    }
  };

  return (
    <div className="content p-8 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-6">Payment Receipt</h3>
      <div className="flex justify-between text-sm mb-4">
        <div>
          <p className="font-medium">Invoice #{generateInvoiceNumber()}</p>
          <p>5021 Wetzel Lane,</p>
          <p>Williamsburg</p>
        </div>
        <div className="text-right">
          <p>Last Payment: {formattedPaymentDate}</p>
        </div>
      </div>
      <div className="text-center mb-4">
        <p className="text-lg font-semibold">Member: {fullName}</p>
        <p>Paid On: {currentDate}</p>
      </div>
      <table className="w-full border border-gray-300 mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Service Taken</th>
            <th className="p-2 text-right">Valid Upto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border-t">{chosenService}</td>
            <td className="p-2 border-t text-right">{getValidUpto()}</td>
          </tr>
          <tr>
            <td className="p-2 border-t">Charge Per Month</td>
            <td className="p-2 border-t text-right">${amountPaid}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="p-2 border-t font-semibold">Total Amount</td>
            <td className="p-2 border-t text-right font-semibold">${amountPaid}</td>
          </tr>
        </tbody>
      </table>
      <p className="text-center mt-4 text-sm">
        We sincerely appreciate your promptness regarding all payments from your side.
      </p>
      <div className="mt-6 text-center">
        <button
          className="bg-red-500 text-white py-2 px-4 rounded shadow hover:bg-red-600 transition duration-200"
          onClick={() => window.print()}
        >
          <i className="fas fa-print mr-2"></i> Print
        </button>
      </div>
    </div>
  );
};

export default PaymentReceipt;
