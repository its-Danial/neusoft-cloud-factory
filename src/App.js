import SignUp from "./pages/SignUp";
import { Route, Switch } from "react-router-dom";
import SignInSide from "./pages/SingInSide";
import ManufacturerDash from "./components/ManufacturerDash";
import AdminDash from "./components/AdminDash";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/sign-in" exact>
        <SignInSide />
      </Route>
      <Route path="/sign-up" exact>
        <SignUp />
      </Route>
      <Route path="/dashboard/admin/user-management" exact>
        <AdminDash />
      </Route>
      <Route path="/dashboard/admin/factory-details" exact>
        <AdminDash />
      </Route>
      <Route path="/dashboard/admin/product-management/product-category" exact>
        <AdminDash />
      </Route>
      <Route path="/dashboard/admin/product-management/product-Details" exact>
        <AdminDash />
      </Route>
      <Route path="/dashboard/admin/capacity-center/device-category" exact>
        <AdminDash />
      </Route>
      <Route path="/dashboard/admin/capacity-center/device-details" exact>
        <AdminDash />
      </Route>
      <Route path="/dashboard/manufacturer/my-factory" exact>
        <ManufacturerDash />
      </Route>
      <Route path="/dashboard/manufacturer/order-management" exact>
        <ManufacturerDash />
      </Route>
      <Route path="/dashboard/customer" exact>
        customer
      </Route>
    </Switch>
  );
}

export default App;
