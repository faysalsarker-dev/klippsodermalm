// Replace this with your real DB logic (MongoDB, PostgreSQL, etc.)
export async function getBlogBySlug(slug) {
  // Example mock
  const blogs = [
    {
      slug: 'hello-world',
      title: 'Hello World Blog',
      author: 'Faysal',
      date: '2025-05-09',
      content: '<p>This is the content of the blog post</p>',
      seo: {
        title: 'Welcome to Hello World Blog',
        description: 'A full blog post about saying hello to the world.',
        keywords: 'hello, blog, world, react',
        ogTitle: 'OG Title - Hello World',
        ogDescription: 'OG Description for Hello World Blog',
        ogImage: 'https://example.com/og-image.jpg',
      },
    },
  ];

  return blogs.find((b) => b.slug === slug);
}
