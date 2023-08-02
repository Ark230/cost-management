export interface RequestElements {
  body?: Record<string, unknown>;
  pathVariables?: Record<string, string>;
  queryParams?: Record<string, string | number>;
}
