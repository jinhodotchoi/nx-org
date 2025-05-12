import Link from 'next/link';
import { Counter } from './_components/counter';

export default function RobotPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-gray-900">Robot Page 🤖</h1>
      <Counter />
      <div className="mt-4">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
