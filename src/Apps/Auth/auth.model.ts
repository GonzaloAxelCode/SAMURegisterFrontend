export interface LoginErrors {
  detail?: string;
  email?: string[];
  password?: string[];
}

export interface UserRegisterData {
  email?: string;
  nickname?: string;
  password?: string;
  re_password?: string;
}

export interface DataActivation {
  uid?: string;
  token?: string;
}

export interface RegisterErrors {
  detail?: string;
  email?: string[];
  password?: string[];
  re_password?: string[];
  nickname?: string[];
  non_field_errors?: string[];
  token?: string[];
}

export interface RegisterStateType {
  isSendEmail?: boolean;
  isLoading?: boolean;
  errors?: RegisterErrors;
  isActivateEmail?: boolean;
}
export interface UserAuthRegister {
  email?: string;
  nickname?: string;
  password?: string;
  re_password?: string;
  last_name?: string;
  first_name?: string;
}

export interface DataResendActivation {
  email?: string;
}

export interface Respuesta {
    networkError?: boolean;
    errors?: any;
    data?: any;
    isSuccess?: boolean;
  }


  export interface UserAuthRegister {
    email?: string;
    nickname?: string;
    password?: string;
    re_password?: string;
    last_name?: string;
    first_name?: string;
  }
  
  export interface RegisterStateType {
    isSendEmail?: boolean;
    isLoading?: boolean;
    errors?: RegisterErrors;
    isActivateEmail?: boolean;
  }
  
  export interface RegisterErrors {
    detail?: string;
    email?: string[];
    password?: string[];
    re_password?: string[];
    nickname?: string[];
    non_field_errors?: string[];
    token?: string[];
  }
  
  export interface UserRegisterData {
    email?: string;
    nickname?: string;
    password?: string;
    re_password?: string;
  }
  
  export interface DataActivation {
    uid?: string;
    token?: string;
  }
  
  export interface DataResendActivation {
    email?: string;
  }
  
  export interface DataResponseFetch {
    state?: number;
    isSuccess?: boolean;
    errors?: RegisterErrors;
  }