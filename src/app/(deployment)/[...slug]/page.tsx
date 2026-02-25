import type { Metadata, ResolvingMetadata } from "next";
import { getPost, getPostsByTopic } from "./_actions/Posts";
import Blog from "./_components/Blog";
import Link from "next/link";
import { Box, Container } from "@mui/material";
import Latest from "./_components/Latest";
import { notFound } from "next/navigation";

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
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
            >
                <Latest data={data} />
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
        return notFound();
}