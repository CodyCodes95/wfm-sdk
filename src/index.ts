import axios from "axios";
import { client } from "./api/client/client";
import { job } from "./api/job/job";
import { time } from "./api/time/time";

type ApiConfig = {
  accountId: string;
  accessToken?: string;
  proxy?: string;
  proxyHeaders?: Record<string, string>;
};

export const createWfmApi = (config: ApiConfig) => {
  const wfmApi = axios.create({
    baseURL: `${config.proxy || ""}/https://api.workflowmax2.com/`,
    headers: {
      account_id: config.accountId,
      Authorization: `Bearer ${config.accessToken}`,
    },
  });

  const api = {
    client: client(wfmApi),
    job: job(wfmApi),
    time: time(wfmApi),
  };

  return api;
};
