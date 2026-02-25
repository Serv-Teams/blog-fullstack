import { Container } from '@mui/material';
import Latest from './_components/Latest';
import { getPosts } from './_actions/Posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serv | Blog',
  description: 'Menampilkan daftar blog yang ditulis oleh para perusahaan.',
}

export default async function Blog() {
  const data = JSON.parse(JSON.stringify(await getPosts()));

  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
    >
      <Latest data={data} />
    </Container>
  );
}