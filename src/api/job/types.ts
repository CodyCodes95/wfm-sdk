export type JobListByClientIdOptions = {
  modifiedsinceutc: string;
  page: number;
  pagesize: number;
};

export type JobListByClientIdResponse = {
  Response: {
    Jobs: {
      Job: {
        ApprovedQuoteId: string;
        ApprovedQuoteUUID: string;
        Assigned: {
          Name: string;
          Staff: string;
          UUID: string;
        };
        Client: {
          Name: string;
          UUID: string;
        };
        ClientOrderId: string;
        DateCreatedUtc: string;
        DateModifiedUtc: string;
        Description: string;
        DueDate: string;
        ID: string;
        Name: string;
        StartDate: string;
        State: string;
        Type: string;
        UUID: string;
        WebUrl: string;
      }[];
    };
    Page: number;
    PageSize: number;
    Status: string;
    TotalRecords: number;
  };
};
