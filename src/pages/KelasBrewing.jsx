import CourseDetailPage from "../components/CourseDetailPage";

export default function KelasBrewing() {
  return <CourseDetailPage
    eyebrow="Specialist Program"
    title="Kelas Manual"
    highlight="Brewing"
    description="Kenali karakter biji kopi dan kuasai teknik seduh manual melalui praktik V60, Kalita, dan metode seduh lainnya. Pelajari variabel seduh untuk menghasilkan cangkir kopi yang konsisten."
    image="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1920&q=75"
    duration="2 Hari"
    level="Intermediate"
    topics={["Pengenalan biji kopi dan single origin", "Grind size, suhu air, dan rasio seduh", "Teknik pour over V60 dan Kalita", "Metode immersion dan Aeropress", "Sensory, cupping, dan evaluasi rasa", "Menyusun resep seduh yang konsisten"]}
    outcomes={["Memahami variabel utama manual brewing", "Mengenali karakter rasa kopi", "Mempraktikkan beberapa metode seduh", "Menyusun resep sesuai karakter biji kopi"]}
  />;
}
