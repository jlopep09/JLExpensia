import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

export default function Auth0ProviderWithRouter({ children }) {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || "/", { replace: true });
  };

  return (
        <Auth0Provider
  domain={domain}
  clientId={clientId}
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
  onRedirectCallback={onRedirectCallback}
  cacheLocation="localstorage"
  useRefreshTokens
>
      {children}
    </Auth0Provider>

  );
}
