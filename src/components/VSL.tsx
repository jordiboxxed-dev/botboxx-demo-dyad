export const VSL = () => {
  return (
    <section className="py-10 sm:py-16">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Mirá Cómo Funciona en 2 Minutos
        </h2>
        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl shadow-indigo-500/20 border border-white/10">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};