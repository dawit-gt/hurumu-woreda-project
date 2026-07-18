import useSWR from 'swr';
import { api } from '@/lib/api';
import { Service, ServiceCategory } from '@/types';
const fetcher = (url: string) => api.get(url).then(r => r.data.data);

export function useServices(category?: ServiceCategory) {
  const url = category ? `/services?category=${category}` : '/services';
  return useSWR<Service[]>(url, fetcher);
}
export function useService(slug: string) { return useSWR<Service>(slug ? `/services/${slug}` : null, fetcher); }
