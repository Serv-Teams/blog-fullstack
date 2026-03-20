import { Container } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontak",
    description: "Hubungi pengelola situs untuk pertanyaan dan masukan.",
};

export default function ContactPage() {
    return (
        <Container
            maxWidth="lg"
            component="main"
        >
            <h1 className="text-3xl font-bold mb-6">Hubungi Kami</h1>

            <p className="mb-4">
                Kami terbuka untuk pertanyaan, masukan, dan diskusi terkait konten yang
                kami sajikan.
            </p>

            <p className="mb-4">
                Silakan hubungi kami melalui email:
            </p>

            <p className="font-semibold">
                📧 serv.teams@gmail.com
            </p>

            <p className="text-sm text-gray-600 mt-8">
                Catatan: Kami tidak menerima konten promosi tersembunyi atau artikel
                titipan yang bertentangan dengan prinsip editorial.
            </p>
        </Container>
    );
}
