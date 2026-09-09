interface EmptyStateProps {
  title: string;
  message?: string;
}

export default function EmptyState({
  title,
  message,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-50 flex-col items-center justify-center text-center h-100%">
      <h2 className="text-2xl font-semibold text-red-800">
        {title}
      </h2>

      {message && (
        <p className="mt-2 text-gray-800">
          {message}
        </p>
      )}
    </div>
  );
}