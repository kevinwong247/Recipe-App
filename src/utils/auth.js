// This is a mock authentication handler.

export function login(username, password) {
    if (username === "user" && password === "pass") {
      return { id: 1, name: "Kevin Wong" };
    }
    return null;
  }
  
  export function logout() {
    return null;
  }
  
  export function register(userData) {
    return { ...userData, id: Date.now() };
  }
  