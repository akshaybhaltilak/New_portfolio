import { Link } from 'react-router-dom'
import React from 'react'

export function Pagination(
    { result, next, prev }
) {
    return (
        <div className="w-full border-t border-gray-300 my-4">
            <div className="mt-2 flex items-center justify-between">
                <div>
                </div>
                <div className="space-x-2">
                    <Link to={prev}>
                        <button
                            type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            &larr; Previous
                        </button>
                    </Link>

                    <Link to={next}>
                        <button
                            type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Next &rarr;
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
