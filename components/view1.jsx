// components/View1.js
import Image from 'next/image';

export default function View1() {
  return (
    <div>
      <main className="relative min-h-screen">
        <div className="relative inset-0">
          <Image
            src="/landing.jpeg"
            alt="Next.js Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative z-10 flex flex-col justify-between min-h-screen py-10 bg-gradient-to-b from-transparent to-black bg-opacity-50 text-white">
          <div
            id="view1"
            className={`text-center mt-10`}
          >
            <h1 className="text-4xl font-bold">Kevin Alexander Galeano Barbosa</h1>
            <p>Bombero - Rescatista - Instructor</p>
          </div>

          <section className="text-center mt-10">
            <p className="text-xl">
              explore <code className="text-yellow-400">erolpxe</code>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
