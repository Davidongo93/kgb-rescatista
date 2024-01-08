import Link from "next/link";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import experiences from "../../utils/Experiences";

export default function Home() {
  return (
    <div>
      <main className="relative min-h-screen mt-14">
        {/* Capa de fondo */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 object-cover w-full h-full"
          style={{ objectFit: "cover", position: "fixed" }}
        >
          <source src="https://res.cloudinary.com/de43jseoy/video/upload/v1704412192/xbtekdxt32y4xknarqiv.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Capa de contenido */}
        <div className="relative z-0 flex flex-col justify-start items-center h-auto text-white">
          <section className="text-center mt-10 relative z-10">
            {/* Mapear el arreglo de experiencias para renderizar las tarjetas */}
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </section>
        {/* Enlace al landing */}
        <Link href="/">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition inline-block mt-4">
            Back to Landing
          </button>
        </Link>
        </div>
      </main>
    </div>
  );
}
