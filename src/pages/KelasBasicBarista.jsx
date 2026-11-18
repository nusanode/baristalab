import CourseDetailPage from "../components/CourseDetailPage";

export default function KelasBasicBarista() {
  return <CourseDetailPage
    eyebrow="Foundation Program"
    title="Kelas Basic"
    highlight="Barista"
    description="Program pengenalan dunia kopi untuk pemula. Pelajari dasar biji kopi, penggunaan peralatan, espresso, dan teknik dasar penyajian minuman melalui praktik langsung."
    image="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1920&q=75"
    duration="1 Hari"
    level="Beginner"
    topics={["Pengenalan kopi dan peralatan bar", "Dasar grinder dan ukuran gilingan", "Pengenalan mesin dan ekstraksi espresso", "Dasar milk steaming", "Pengenalan latte art", "Kebersihan dan workflow area bar"]}
    outcomes={["Mengenali peralatan dasar barista", "Memahami tahapan dasar espresso", "Mempraktikkan milk steaming dasar", "Memahami alur kerja sederhana coffee shop"]}
  />;
}
