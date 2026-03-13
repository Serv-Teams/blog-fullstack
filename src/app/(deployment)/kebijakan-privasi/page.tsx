import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kebijakan Privasi",
    description: "Kebijakan privasi dan penggunaan data pengunjung situs.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-6">Kebijakan Privasi</h1>

            <p className="mb-4">
                Privasi pengunjung sangat penting bagi kami. Dokumen ini menjelaskan
                bagaimana informasi dikumpulkan dan digunakan di{" "}
                <strong>Serv-Blog</strong>.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">
                Informasi yang Dikumpulkan
            </h2>
            <p className="mb-4">
                Kami dapat mengumpulkan informasi non-pribadi seperti alamat IP, jenis
                browser, halaman yang dikunjungi, dan waktu kunjungan untuk keperluan
                analisis dan peningkatan kualitas situs.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">
                Cookie dan Iklan
            </h2>
            <p className="mb-4">
                Situs ini menggunakan cookie untuk meningkatkan pengalaman pengguna.
                Google sebagai vendor pihak ketiga dapat menggunakan cookie untuk
                menayangkan iklan yang relevan kepada pengunjung.
            </p>

            <p className="text-sm text-gray-600 mt-8">
                Dengan menggunakan situs ini, Anda menyetujui Kebijakan Privasi ini.
            </p>
        </main>
    );
}
