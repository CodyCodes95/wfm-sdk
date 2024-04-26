type Params = Record<string, any> | undefined;

export const apiParams = (params: Params) => {
  return new URLSearchParams(params);
};
