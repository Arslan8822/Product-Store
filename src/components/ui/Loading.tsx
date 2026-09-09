export default function Loading({
  message = "Loading...",
}: {
  message?: string;
}) {
  return (
    <div className="flex min-h-50 items-center justify-center">
      <p className="text-lg text-gray-600">{message}</p>
    </div>
  );
}