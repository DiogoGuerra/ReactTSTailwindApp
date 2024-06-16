
const ErrorPage = (props: { message: string }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center bg-red-100 p-4 rounded shadow-md">
        <svg
          className="h-10 w-10 text-red-600 mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.686-1.14 1.118-2.01L13.118 4.01c-.569-.871-1.667-.871-2.236 0L4.064 17.99c-.568.87.064 2.01 1.118 2.01z"
          />
        </svg>
        <div className="text-xl font-semibold text-red-600">Error</div>
        <div className="text-red-600">{props.message}</div>
      </div>
    </div>
  );
};

export default ErrorPage;
