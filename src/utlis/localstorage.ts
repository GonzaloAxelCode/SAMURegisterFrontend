export interface TokenPair {
  accessToken?: string;
  refreshToken?: string;
}

export interface TokensState {
  tokens?: TokenPair;
}

export function getTokensFromLocalStorage(): TokensState {
  if (typeof window !== "undefined" && window.localStorage) {
    const accessToken = localStorage?.getItem("accessToken") || "";
    const refreshToken = localStorage?.getItem("refreshToken") || "";
    return {
      tokens: {
        accessToken: accessToken || "",
        refreshToken: refreshToken || "",
      },
    };
  }
  return {
    tokens: {
      accessToken: "",
      refreshToken: "",
    },
  };
}

export function saveTokensToLocalStorage(tokens: TokenPair) {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("accessToken", tokens?.accessToken || "");
    localStorage.setItem("refreshToken", tokens?.refreshToken || "");
  }
}

export function saveTokenGoogle(id_token: string) {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("id_token", id_token || "");
  }
}
export function clearTokensLocalstorage() {
  localStorage?.removeItem("accessToken");
  localStorage?.removeItem("refreshToken");
}
