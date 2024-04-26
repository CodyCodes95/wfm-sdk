export type AddTimeInput = {
  Date: Date;
  Job: string;
  Minutes: number;
  Note: string;
  StaffUUID: string;
  TaskUUID: string;
  Start?: string;
  End?: string;
};

export type AddTimeResponse = {
  "time.api-uuid": {
    Status: string;
    Time: {
      Billable: boolean;
      Date: string;
      End: number;
      InvoiceTaskUUID: string;
      Job: {
        ID: string;
        Name: string;
      };
      Minutes: number;
      Note: string;
      Staff: {
        Name: string;
        UUID: string;
      };
      Start: number;
      Task: {
        Name: string;
        UUID: string;
      };
      UUID: string;
    };
  };
};
