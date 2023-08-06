import Alert from "@/src/components/alert";
import DataProvider from "@/src/context/DataContext";
import { store } from "@/src/modern_redux/store";
import { GOOGLE_ID } from "@/src/utlis/envs";
import NextNProgress from "nextjs-progressbar";

import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";
import "primeicons/primeicons.css";
import PrimeReact from "primereact/api";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useEffect, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import UIProvider from "@/src/context/UIContext";
import { ProgressBar } from "primereact/progressbar";
PrimeReact.ripple = true;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_ID || ""}>
      <UIProvider>
        <ReduxProvider store={store}>
          <DataProvider>
            {isLoading ? (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 9999,
                }}
              >
                <div style={{ width: "200px" }}>
                  <img
                    className="mb-3"
                    src="https://res.cloudinary.com/ddksrkond/image/upload/v1687315829/samu/download-removebg-preview_iidvap.png"
                    alt=""
                  />

                  <ProgressBar
                    mode="indeterminate"
                    style={{ height: "3px", background: "transparent" }}
                    color="red"
                  ></ProgressBar>
                </div>
              </div>
            ) : (
              <>
                <Alert />
                <NextNProgress />
                <Component {...pageProps} key={router.route} />
              </>
            )}
          </DataProvider>
        </ReduxProvider>
      </UIProvider>
    </GoogleOAuthProvider>
  );
}
