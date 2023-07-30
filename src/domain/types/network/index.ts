export interface RequestElements {
  body?: Record<string, unknown>;
  pathVariables?: string | number;
  queryParams?: Record<string, string | number>;
}
