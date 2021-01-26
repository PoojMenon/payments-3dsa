import * as React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import WrappedLayout from "./helpers/wrappedLayout";
import BillingOverview from "./pages/AddFunds/BillingOverview";
import FundAccountPage from "./pages/AddFunds/FundAccount";
import FundsAdded from "./pages/AddFunds/FundsAdded";
import AddPaymentMethodPage from "./pages/AddFunds/AddPaymentMethod";

import FundAccountUpgrade from "./pages/Upgrade/FundAccount";
import PaymentMethodsPage from "./pages/Upgrade/PaymentMethods";
import CompanyAddressPage from "./pages/Upgrade/CompanyAddressPage";
import CompletePage from "./pages/Upgrade/CompletePage";
import VatPage from "./pages/Upgrade/VatPage";

export default () => {
  const wrapWithLayout = (component) => {
    return <WrappedLayout>{component}</WrappedLayout>;
  };

  return (
    <BrowserRouter>
      <Switch>
        {/* Add Funds */}
        <Route exact path="/" key={"Route-Main"}>
          {wrapWithLayout(<BillingOverview />)}
        </Route>
        <Route exact path="/home" key={"Route-Main"}>
          {wrapWithLayout(<BillingOverview />)}
        </Route>
        <Route exact path="/add-funds" key={"Route-Add-Funds"}>
          {wrapWithLayout(<FundAccountPage />)}
        </Route>
        <Route exact path="/funds-added" key={"Route-Funds-Added"}>
          {wrapWithLayout(<FundsAdded />)}
        </Route>
        <Route
          exact
          path="/add-payment-method"
          key={"Route-Add-Payment-Method"}
        >
          {wrapWithLayout(<AddPaymentMethodPage />)}
        </Route>

        {/* End Add Funds */}
        {/* Upgrade */}
        <Route exact path="/upgrade" key={"Route-Company-Address"}>
          {wrapWithLayout(<CompanyAddressPage />)}
        </Route>
        {/* <Route exact path="/company-address" key={"Route-Company-Address"}>
          {wrapWithLayout(<CompanyAddressPage />)}
        </Route> */}
        <Route exact path="/tax" key={"Route-Tax"}>
          {wrapWithLayout(<VatPage />)}
        </Route>
        <Route exact path="/add-funds-upg" key={"Route-Add-Funds"}>
          {wrapWithLayout(<FundAccountUpgrade />)}
        </Route>
        <Route
          exact
          path="/add-payment-method-upg"
          key={"Route-Payment-Method"}
        >
          {wrapWithLayout(<PaymentMethodsPage />)}
        </Route>
        <Route exact path="/complete" key={"Route-Complete"}>
          {wrapWithLayout(<CompletePage />)}
        </Route>
        {/* End Upgrade */}
      </Switch>
    </BrowserRouter>
  );
};
