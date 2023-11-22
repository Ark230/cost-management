export interface RequestElements {
  body?: Record<string, any>;
  pathVariables?: Record<string, string | number>;
  queryParams?: Record<string, string | number>;
}
