
export interface UserTypes {
  name: string | null;
  email: string | null;
}

export interface AuthTypes {
  user: UserTypes;
  token: string | null;
  isLoggedIn: boolean;
}

export interface ItemTypes {
  id: string;
  name: string;
  number: string;
}

export interface ContactsTypes {
  item: ItemTypes;
  filter?: string;
}

export interface StateTypes {
  auth: AuthTypes;
  contacts: ContactsTypes;
}