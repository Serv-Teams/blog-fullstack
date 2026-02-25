import type { Metadata, ResolvingMetadata } from "next";
import { getPost, getPostsByTopic } from "./_actions/Posts";
import Blog from "./_components/Blog";
import Link from "next/link";
import { Box, Container } from "@mui/material";

type Props = {
    params: Promise<{ slug: string[] }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

/* =========================
   ✅ Dynamic Metadata
========================= */
export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params;

    if (slug.length === 2) {
        const blog = await getPost(slug[1]);

        return {
            title: blog?.title || "Blog",
            description: blog?.content?.slice(0, 150) || "Blog post",
        };
    }

    if (slug.length === 1) {
        return {
            title: `Topic: ${slug[0]}`,
            description: `Posts under topic ${slug[0]}`,
        };
    }

    return {
        title: "Blog",
        description: "Blog page",
    };
}

export default async function Page({
    params,
}: Props) {
    const { slug } = await params

    if (slug.length === 1) {
        const data = await getPostsByTopic(slug[0]);

        return (
            // <>
            //     {
            //         data?.map((d: any) => {
            //             const fullUrl = `/${d.slugs.join('/')}`;
            //             return (

            //                 <div key={d._id}>
            //                     {d.title}
            //                     <Link href={fullUrl}>
            //                         Baca Selengkapnya
            //                     </Link>
            //                 </div>
            //             )
            //         })
            //     }
            // </>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        my: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div>
                        {data.map((post: any) => {
                            // --- INI CARA MENGGABUNGKAN ARRAY SLUG ---
                            // Mengubah ['blog', '2024', 'nextjs-tutorial'] menjadi "/blog/2024/nextjs-tutorial"
                            const fullUrl = `/${post.slugs.join('/')}`;

                            return (
                                <div key={post._id} style={{ marginBottom: '10px' }}>
                                    <h2>{post.title}</h2>
                                    <Link href={fullUrl}>
                                        Baca Selengkapnya
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </Box>
            </Container>
        )

    } else if (slug.length === 2) {
        const blog = await getPost(slug[1]);
        return (
            <Container maxWidth="lg">
                <Box
                    sx={{
                        my: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Blog content={blog?.content} title={blog?.title} />
                </Box>
            </Container>
        )

    } else
        return <div>My Post: {slug}</div>
}