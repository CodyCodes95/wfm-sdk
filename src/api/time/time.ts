import type { AxiosInstance } from "axios";
import type { AddTimeInput, AddTimeResponse } from "./types";
import { buildXml, parseXml } from "../../utils/xml";

export const time = (wfmApi: AxiosInstance) => ({
  addTime: async (input: AddTimeInput) => {
    const xmlInput = buildXml({
      ...input,
      Date: input.Date.toISOString().split("T")[0]?.replaceAll("-", ""),
    });
    const response = await wfmApi.post<string>(`/time.api/addTime`, xmlInput);
    const data = parseXml<AddTimeResponse>(response.data);
    return data;
  },
});
