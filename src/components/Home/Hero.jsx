import Image from "next/image";


const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <Image
        src='/hero.jpg'
        alt="Hero Background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay  z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-neutral-content px-4">
        <div className="max-w-xl mx-auto">
          <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
          <p className="mb-5 text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
