import type { AxiosInstance } from "axios";
import { apiParams } from "../../utils/apiParams";
import { parseXml } from "../../utils/xml";
import type { JobListByClientIdOptions, JobListByClientIdResponse } from "./types";

export const job = (wfmApi: AxiosInstance) => ({
  getByClientId: async (clientId: string, options?: JobListByClientIdOptions) => {
    const params = apiParams(options);
    const response = await wfmApi.get<string>(`/job.api/getByClientId/${clientId}${params ? `?${params}` : ""}`);
    const data = parseXml<JobListByClientIdResponse>(response.data);
    return data;
  },
});
