import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./ui/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { LocationProvider } from "./context/LocationContext";
import { Toaster } from "react-hot-toast";
import UserPage from "./pages/UserPage";
import MemoryForm from "./features/Memory/MemoryForm";
import MemoryInfo from "./features/Memory/MemoryInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "user/:usernameSlug",
        element: <UserPage />,
        children: [
          {
            path: "new-memory",
            element: <MemoryForm />,
          },
          {
            path: "memory/:memoryId",
            element: <MemoryInfo />,
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <LocationProvider>
        <RouterProvider router={router} />;
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "black",
              zIndex: "10000",
            },
          }}
        />
      </LocationProvider>
    </QueryClientProvider>
  );
}

export default App;
