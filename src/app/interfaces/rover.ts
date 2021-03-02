enum status {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}
export interface Rover {
  id: 5;
  name: string;
  landing_date: string;
  launch_date: string;
  status: status;
}
