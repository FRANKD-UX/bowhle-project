
export function getToken() {
  return localStorage.getItem("token");
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function getUserRole() {
  const user = getUser();
  return user?.role;
}

export function isAuthenticated() {
  return !!getToken();
}
