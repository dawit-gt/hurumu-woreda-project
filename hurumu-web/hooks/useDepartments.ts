import useSWR from 'swr';
import { arrayFetcher, fetcher } from '@/lib/api';
import { Department } from '@/types';

export function useDepartments() { return useSWR<Department[]>('/departments', arrayFetcher); }
export function useDepartment(slug: string) { return useSWR<Department>(slug ? `/departments/${slug}` : null, fetcher); }
