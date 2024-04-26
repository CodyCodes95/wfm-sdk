import type { AxiosInstance } from "axios";
import { apiParams } from "../../utils/apiParams";
import type { ClientListOptions, ClientListResponse } from "./types";
import { parseXml } from "../../utils/xml";

export const client = (wfmApi: AxiosInstance) => ({
  list: async (options?: ClientListOptions) => {
    const params = apiParams(options);
    const response = await wfmApi.get<string>(`/client.api/list${params ? `?${params}` : ""}`);
    const data = parseXml<ClientListResponse>(response.data);
    return data;
  },
});
