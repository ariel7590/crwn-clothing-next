"use client";

interface ErrorProps{
    error: Error;
    reset: ()=>void;
}
const Error=({error,reset}:ErrorProps)=>{
    return(
        <div className="uppercase flex flex-col gap-2">
            <div>
                ooops...
            </div>
            <div>
                {error.message}
            </div>
            <button onClick={reset}>
                try again
            </button>
        </div>
    )
}

export default Error;