"use client";

interface ErrorProps{
    error: Error;
    reset: ()=>void;
}

interface CustomError {
  message: string;
  details?: string;
  hint?: string;
  code?: string;
}

function isCustomError(err: any): err is CustomError {
  return typeof err === "object" && "message" in err;
}

const Error=({error,reset}:ErrorProps)=>{
    return(
        <div className="uppercase flex flex-col gap-2">
            <div className="flex flex-col items-center bg-white rounded-2xl p-12 mt-10 max-w-3xl w-full mx-auto min-h-[450px] aspect-[4/3] justify-center text-lg md:text-xl">
                <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                    <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2">
                        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <line x1="24" y1="14" x2="24" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                        <circle cx="24" cy="34" r="2.5" fill="currentColor"/>
                    </svg>
                </div>
                <h2 className="text-4xl font-bold text-black mb-2">Something went wrong</h2>
                <p className="text-gray-700 mb-4 text-center">{isCustomError(error) ? error.message : "Something went wrong."}</p>
                <button
                    onClick={reset}
                    className="px-6 py-2 bg-black text-white rounded-md shadow hover:bg-gray-900 transition-colors duration-200 font-semibold"
                >
                    Try Again
                </button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                    If the problem persists, please <a href="mailto:support@example.com" className="underline text-black hover:text-gray-900">contact support</a>.
                </p>
            </div>
        </div>
    )
}

export default Error;