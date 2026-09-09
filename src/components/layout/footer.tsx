export default function Footer() {
  return (
    <footer className="mt-auto h-full border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Product Store.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}