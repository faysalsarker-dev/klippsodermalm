import axiosInstance from "@/app/lib/axios";


export async function getBlogDetails(slug) {
  try {
    const response = await axiosInstance.get(`/blogs/${slug}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch blog');
  }
}
