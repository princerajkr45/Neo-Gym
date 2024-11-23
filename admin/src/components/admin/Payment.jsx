import React from "react";
import { Outlet } from "react-router-dom";
import PaymentForm from "./Payment/PaymentForm";

function Payment() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Payment;
