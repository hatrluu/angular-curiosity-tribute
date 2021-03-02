enum camName {
  FHAZ = 'FHAZ',
  RHAZ = 'RHAZ',
  MAST = 'MAST',
  CHEMCAM = 'CHEMCAM',
  MAHLI = 'MAHLI',
  MARDI = 'MARDI',
  NAVCAM = 'NAVCAM'
}
export interface Camera {
  id: number;
  name: camName;
  rover_id: number;
  full_name: string;
}
