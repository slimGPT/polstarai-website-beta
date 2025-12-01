import OrbitSphere from "@/components/OrbitSphere";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <main className="container max-w-4xl mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            There's an AI Agent for that
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Sales Agent
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Recruiting Agent
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Education Agent
            </button>
            <button className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
              Media Agent
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              SDR Agent
            </button>
          </div>

          <div className="my-16">
            <OrbitSphere />
          </div>

          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Media Agent
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Effortlessly capture fledging thoughts, organize them into structured outlines, extract key insights, quotes, relevant points, and even get help on that first draft.
          </p>

          <button className="px-8 py-3 text-blue-600 border-2 border-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors">
            Learn more
          </button>
        </div>
      </main>
    </div>
  );
}
