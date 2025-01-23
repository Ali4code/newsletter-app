const API_KEYS_LOCAL_STORAGE_KEY = "api_keys";

export type TApiKeys = {
  newsApiOrg: string;
  guardianNews: string;
};

export const useGetApiKeys = (): { apiKeys: TApiKeys } => {
  const apiKeysFromStorage = JSON.parse(
    localStorage.getItem(API_KEYS_LOCAL_STORAGE_KEY) ?? "{}"
  );

  // const ApiKeysFromEnv = {
  //   newsApiOrg: process?.env?.NEWS_API_ORG_API_KEY,
  //   guardianNews: process?.env?.GUARDIAN_API_KEY,
  // };

  return {
    apiKeys: apiKeysFromStorage
    //  ?? ApiKeysFromEnv,
  };
};
