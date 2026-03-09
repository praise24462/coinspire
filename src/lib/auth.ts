// simple client-side auth helpers using localStorage

const AUTH_KEY = "isLoggedIn";

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(AUTH_KEY) === "true";
}

export function login() {
  if (typeof window !== "undefined") {
    localStorage.setItem(AUTH_KEY, "true");
    // trigger storage event for other tabs/components
    window.dispatchEvent(new Event("storage"));
  }
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_KEY);
    window.dispatchEvent(new Event("storage"));
  }
}
