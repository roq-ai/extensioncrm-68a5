const mapping: Record<string, string> = {
  contacts: 'contact',
  'customer-supports': 'customer_support',
  leads: 'lead',
  opportunities: 'opportunity',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
