import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tentang Kami",
    description:
        "Situs analisis dan opini editorial tentang isu sosial, ekonomi, dan kebijakan publik di Indonesia.",
};

export default function AboutPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-6">Tentang Kami</h1>

            <p className="mb-4">
                <strong>Serv-Blog</strong> adalah situs analisis dan refleksi publik
                yang membahas isu sosial, ekonomi, politik, lingkungan, dan kebijakan
                publik di Indonesia.
            </p>

            <p className="mb-4">
                Kami bukan portal berita harian. Konten yang kami sajikan merupakan
                artikel analisis dan opini editorial berbasis peristiwa publik, dengan
                tujuan membantu pembaca memahami konteks dan dampak jangka panjang suatu
                isu.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">
                Prinsip Editorial
            </h2>
            <ul className="list-disc ml-6 mb-6">
                <li>Konten orisinal dan bebas plagiarisme</li>
                <li>Tidak menampilkan sensasionalisme atau eksploitasi tragedi</li>
                <li>Berorientasi pada kepentingan publik</li>
                <li>Menghormati nilai kemanusiaan dan etika jurnalistik</li>
            </ul>

            <p className="text-sm text-gray-600">
                Catatan: Seluruh artikel di situs ini bersifat analisis dan opini
                editorial, bukan pernyataan resmi lembaga tertentu.
            </p>
        </main>
    );
}
