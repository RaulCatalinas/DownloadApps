import type { Apps } from "@apps-types";
import { API_APPS_SEARCH_PARAMS, API_APPS_URL } from "@constants/apps";

export async function getApps(): Promise<Apps[]> {
  const res = await fetch(`${API_APPS_URL}${API_APPS_SEARCH_PARAMS}`);
  const { data } = await res.json();

  return data;
}
