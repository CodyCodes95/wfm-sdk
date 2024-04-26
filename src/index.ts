import axios from "axios";
import { client } from "./api/client/client";
import { job } from "./api/job/job";
import { time } from "./api/time/time";

type ApiConfig = {
  accountId: string;
  getAccessToken: () => Promise<string>;
};

export const createWfmApi = (config: ApiConfig) => {
  const wfmApi = axios.create({
    baseURL: `/https://api.workflowmax2.com/`,
    headers: {
      account_id: config.accountId,
    },
  });

  wfmApi.interceptors.request.use(async (axiosConfig) => {
    const accessToken = await config.getAccessToken();
    axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
    return axiosConfig;
  });

  const api = {
    client: client(wfmApi),
    job: job(wfmApi),
    time: time(wfmApi),
  };

  return api;
};
