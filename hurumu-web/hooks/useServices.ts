import useSWR from 'swr';
import { arrayFetcher, fetcher } from '@/lib/api';
import { Service, ServiceCategory } from '@/types';

export function useServices(category?: ServiceCategory) {
  const url = category ? `/services?category=${category}` : '/services';
  return useSWR<Service[]>(url, arrayFetcher);
}
export function useService(slug: string) { return useSWR<Service>(slug ? `/services/${slug}` : null, fetcher); }
