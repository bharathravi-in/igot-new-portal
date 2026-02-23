export interface CadreDetails {
  civilServiceTypeId: string;
  civilServiceType: string;
  civilServiceId: string;
  civilServiceName: string;
  cadreId: string;
  cadreName: string;
  cadreBatch: number;
  cadreControllingAuthorityName: string;
  isOnCentralDeputation: boolean;
}

export interface EmploymentDetails {
  departmentName: string;
  pinCode: string;
  employeeCode: string;
  aboutme: string;
}

export interface DesignationDetails {
  name?: string;
  id?: string;
}

export interface ProfileDetails {
  cadreDetails?: CadreDetails;
  employmentDetails?: EmploymentDetails;
  designationDetails?: DesignationDetails;
  profileStatus?: string;
  profileDesignationStatus?: string;
  profileUpdateCompletion?: number;
}

export interface UserResponse {
  id: string;
  identifier: string;
  firstName: string;
  lastName?: string;
  email?: string;
  maskedPhone?: string;
  channel: string;
  rootOrgId: string;
  profileUpdateCompletion: number;
  profileDetails: ProfileDetails;
  updatedDate: string;
}

export interface UserReadApiResponse {
  id: string;
  ver: string;
  ts: string;
  params: {
    status: string;
    err: string | null;
    errmsg: string | null;
  };
  responseCode: string;
  result: {
    response: UserResponse;
  };
}
