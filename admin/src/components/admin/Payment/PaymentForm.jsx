import React from "react";
import { Link, useLocation } from "react-router-dom";

// Reusable Table Row Component
const TableRow = ({ label, children }) => (
  <tr>
    <td className="py-2 px-4 border-b">{label}</td>
    <td className="py-2 px-4 border-b">{children}</td>
  </tr>
);

export default function PaymentForm() {
  const location = useLocation();

  // Get the passed data from location.state (your paymentData)
  const paymentData = location.state?.data || {};

  // Destructure the paymentData object to easily access the required fields
  const {
    _id = "",
    member = {},
    amountPaid = 0,
    paymentDate = "",
    chosenService = "",
    plan = "",
  } = paymentData;

  const { fullName = "" } = member;

  // Format the paymentDate (you can use any library like `date-fns` or `moment` for better formatting)
  const formattedPaymentDate = paymentDate
    ? new Date(paymentDate).toLocaleDateString()
    : "";
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center mb-4">
        <span className="text-blue-500 text-2xl">
          <i className="fas fa-money"></i>
        </span>
        <h5 className="ml-2 text-lg font-semibold">Payments</h5>
      </div>

      <div className="flex flex-wrap">
        {/* Gym Info */}
        <div className="w-full md:w-5/12 p-4">
          <table className="w-full">
            <tbody>
              <tr>
                <td>
                  <img src="" alt="Gym Logo" width="175" />
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className="text-xl font-bold">Perfect GYM Club</h4>
                </td>
              </tr>
              <tr>
                <td>5021 Wetzel Lane, Williamsburg</td>
              </tr>
              <tr>
                <td>Tel: 231-267-6011</td>
              </tr>
              <tr>
                <td>Email: support@perfectgym.com</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment Form */}
        <div className="w-full md:w-7/12 p-4">
          <form action="userpay.php" method="POST">
            <table className="table-auto w-full border border-gray-300">
              <tbody>
                <TableRow label="Member's Fullname:">
                  <strong>{fullName}</strong>
                </TableRow>
                <TableRow label="Service:">
                  <strong>{chosenService}</strong>
                </TableRow>
                <TableRow label="Amount Per Month:">
                  <input
                    id="amount"
                    type="number"
                    name="amount"
                    defaultValue={amountPaid}
                    className="border border-gray-300 rounded p-1"
                  />
                </TableRow>
                <TableRow label="Plan:">
                  <select
                    name="plan"
                    defaultValue={plan}
                    required
                    className="border border-gray-300 rounded p-1"
                  >
                    <option value="1">basic</option>
                    <option value="3">standard</option>
                    <option value="6">premium</option>
                  </select>
                </TableRow>
                <TableRow label="Member's Status:">
                  <select
                    name="status"
                    defaultValue="Active"
                    required
                    className="border border-gray-300 rounded p-1"
                  >
                    <option value="Active">Active</option>
                    <option value="Expired">Expired</option>
                  </select>
                </TableRow>
              </tbody>
            </table>

            {/* Hidden inputs (outside the table structure to avoid nesting errors) */}
            <input type="hidden" name="fullname" value={fullName} />
            <input type="hidden" name="services" value={chosenService} />
            <input type="hidden" name="paid_date" value={formattedPaymentDate} />
            <input type="hidden" name="id" value={_id} />

            <div className="text-center mt-4">
              <Link to="/admin/payment/PaymentReceipt" state={{ data: paymentData }}>
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded"
                  type="submit"
                >
                  Make Payment
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
