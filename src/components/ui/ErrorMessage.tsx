interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorMessage({
  message = "Something went wrong.",
  onRetry,
}: ErrorMessageProps) {
  return (
    <div className="flex min-h-50 flex-col items-center justify-center gap-4">
      <p className="text-lg text-red-600">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
        >
          Try Again
        </button>
      )}
    </div>
  );
}