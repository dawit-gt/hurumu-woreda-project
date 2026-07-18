import useSWR from 'swr';
import { api } from '@/lib/api';
import { Department } from '@/types';
const fetcher = (url: string) => api.get(url).then(r => r.data.data);

export function useDepartments() { return useSWR<Department[]>('/departments', fetcher); }
export function useDepartment(slug: string) { return useSWR<Department>(slug ? `/departments/${slug}` : null, fetcher); }
