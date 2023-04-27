import { ProviderAuth } from "@hooks/useAuth";
import MainLayout from "@layout/MainLayout";
import "../styles/tailwind.css";

const WithoutPrivateRoute = ({ children }) => <>{children}</>;

export default function App({ Component, pageProps }) {

  const Auth = Component.Auth || WithoutPrivateRoute

  return (
    <ProviderAuth>
      <Auth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Auth>
    </ProviderAuth>
  );
}
