import { useAuth0 } from "@auth0/auth0-react";

export default function AuthButtons() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <li><a className="bg-secondary text-white" onClick={() => loginWithRedirect()}>Login</a></li>
        
      ) : (
        <>
          <span className="my-3 font-bold justify-center text-center w-full flex items-center">{user?.email }</span>
          <li><a className="bg-secondary text-white" onClick={() =>
              logout({
                logoutParams: { returnTo: window.location.origin },
              })
            }>Cerrar sesión</a></li>
        
        </>
      )}
    </div>
  );
}
