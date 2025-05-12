import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-gray-900">Hello World</h1>
      <Link
        href="/robot"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2"
      >
        🤖 Go to Robot Page
      </Link>
    </div>
  );
}
