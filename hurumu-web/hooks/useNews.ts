import useSWR from 'swr';
import { api } from '@/lib/api';
import { ApiResponse, Paginated, NewsItem, NewsTag, NewsStatus } from '@/types';

const fetcher = (url: string) => api.get(url).then(r => r.data.data);

interface NewsQuery { page?: number; limit?: number; tag?: NewsTag; status?: NewsStatus; search?: string; }

export function useNewsList(query: NewsQuery = {}) {
  const params = new URLSearchParams();
  if (query.page)   params.set('page', String(query.page));
  if (query.limit)  params.set('limit', String(query.limit));
  if (query.tag)    params.set('tag', query.tag);
  if (query.status) params.set('status', query.status);
  if (query.search) params.set('search', query.search);
  return useSWR<Paginated<NewsItem>>(`/news?${params}`, fetcher);
}

export function useNewsItem(slug: string) {
  return useSWR<NewsItem>(slug ? `/news/${slug}` : null, fetcher);
}
