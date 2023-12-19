import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import PersonalInfo from "./pages/PersonalInfo";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import PlansContext from "./contexts/PlansContext";
import AddOnsContext from "./contexts/AddOnsContext";
import Summary from "./pages/Summary";
import ThankYou from "./pages/ThankYou";
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PersonalInfo />,
      },
      {
        path: "selectplan",
        element: <SelectPlan />,
      },
      {
        path: "addons/:planType?", // Add :planType parameter ues param from react-router-dom
        element: <AddOns />,
      },
      {
        path: "summary/:sumType?",
        element: <Summary />,
      },
      {
        path: "thankyou",
        element: <ThankYou />,
      },
      // {
      //   path: "*",
      //   element: <h1>final-page</h1>,
      // },
    ],
  },
]);
const App = () => {
  return (
    <PlansContext>
      <AddOnsContext>
        <RouterProvider router={router}></RouterProvider>
      </AddOnsContext>
    </PlansContext>
  );
};

export default App;
