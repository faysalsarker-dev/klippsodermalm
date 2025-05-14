import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axiosInstance';

export const useBlogBySlug = (slug) =>
  useQuery({
    queryKey: ['blog', slug],
    queryFn: async () => {
      const res = await axiosInstance.get(`/blogs/${slug}`);
      return res.data;
    },
    enabled: !!slug,
  });
