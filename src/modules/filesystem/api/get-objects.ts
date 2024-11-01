import { api } from "@/lib/api-client";
import { Object } from "../types";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { QueryConfig } from "@/lib/react-query";

interface GetObjectsParams {
  prefix?: string;
}

const getObjects = async (params: GetObjectsParams): Promise<Object[]> => {
  return await api.get("/filesystem", { params });
};

const getObjectsQueryOptions = (params: GetObjectsParams) => {
  return queryOptions({
    queryKey: ["get-objects", params.prefix],
    queryFn: () => getObjects(params),
  });
};

type UseGetObjectsOptions = {
  queryConfig?: QueryConfig<typeof getObjectsQueryOptions>;
};

export const useGetObjects = (
  params: GetObjectsParams = {},
  { queryConfig }: UseGetObjectsOptions = {}
) => {
  return useQuery({
    ...getObjectsQueryOptions(params),
    ...queryConfig,
  });
};
