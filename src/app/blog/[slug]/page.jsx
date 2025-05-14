
import { notFound } from "next/navigation";
import { getBlogDetails } from "@/utility/getBlogDetails";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import BlogContent from "@/components/common/BlogContent";




export async function generateMetadata({ params }) {
    const post = await getBlogDetails(params.slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            images: [
                {
                    url: post.image,
                    alt: post.title,
                },
            ],
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [post.image],
        },
    };
}

export default async function BlogPage({ params }) {
    const post = await getBlogDetails(params.slug);

    if (!post) {
        notFound();
    }

    console.log(post);

    return (
       
        <>
            <article>
                <h1>{post.title}</h1>
                <p>
                    <small>
                        By {post.author} on {new Date(post.date).toLocaleDateString()}
                    </small>
                </p>
                {post.image && (
                    <img
                        src={post.image}
                        alt={post.title}
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                )}
                <div
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    style={{ marginTop: "1em" }}
                />
                <div>
                    {post.tags &&
                        post.tags.map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    display: "inline-block",
                                    marginRight: "8px",
                                    padding: "2px 8px",
                                    background: "#eee",
                                    borderRadius: "4px",
                                    fontSize: "0.9em",
                                }}
                            >
                                #{tag}
                            </span>
                        ))}
                </div>
                <BlogContent content={post?.content} />
            </article>
        </>)
}