type Role = 'ADMINISTRATOR' | 'WAREHOUSE_STAFF' | 'CARRIER' | 'CLIENT';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  addressId: number;
  role: Role;
}
