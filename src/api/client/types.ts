export type ClientListOptions = {
  detailed: boolean;
  modifiedsince: string;
  page: number;
  pagesize: number;
};

export type ClientListResponse = {
  Response: {
    Clients: {
      Client: {
        AccountManager: {
          Name: string;
          UUID: string;
        };
        Address: string;
        City: string;
        Contacts: {
          Contact: {
            Addressee: string;
            Email: string;
            IsPrimary: string;
            Mobile: string;
            Name: string;
            Phone: string;
            Position: string;
            Salutation: string;
            UUID: string;
          };
        }[];
        Country: string;
        DateOfBirth: string;
        Email: string;
        ExportCode: string;
        Fax: string;
        FirstName: string;
        Gender: string;
        IsArchived: string;
        IsDeleted: string;
        IsProspect: string;
        LastName: string;
        Name: string;
        Notes: {
          Note: {
            CreatedBy: string;
            Date: string;
            Folder: string;
            Text: string;
            Title: string;
          };
        }[];
        OtherName: string;
        Phone: string;
        PostalAddress: string;
        PostalCity: string;
        PostalCountry: string;
        PostalPostCode: number;
        PostalRegion: string;
        Postcode: string;
        ReferralSource: string;
        Region: string;
        Title: string;
        Type: {
          CostMarkup: number;
          Name: string;
          PaymentDay: number;
          PaymentTerm: string;
        };
        UUID: string;
        Website: string;
      };
    }[];
    Page: number;
    PageSize: number;
    Status: string;
    TotalRecords: number;
  };
};
