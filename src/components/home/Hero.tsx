export function Hero() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            International Research Institute for Advanced Systems
          </h1>
          <h2 className="text-7xl font-bold mb-8">IRIAS</h2>
          <p className="text-xl opacity-90">
            Advancing the frontiers of knowledge through innovative research and international collaboration
          </p>
        </div>
      </div>
    </div>
  );
}