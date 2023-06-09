import React from "react";
import { PaginationProps } from "@/types";

export function Pagination({
    currentPage,
    goToFirstPage,
    goToPreviousPage,
    getPageRange,
    handlePageChange,
    goToNextPage,
    goToLastPage,
    totalPages,
}: PaginationProps) {
    return (
        <div className="flex flex-wrap max-sm:gap-3 justify-center items-center mt-8">
            <button
                className="mr-2 text-xl px-4 py-2 rounded-md bg-green-500 text-white hover:filter hover:brightness-95"
                onClick={goToFirstPage}
                disabled={currentPage === 1}
            >
                First
            </button>
            <button
                className="mr-2 text-xl px-4 py-2 rounded-md bg-green-500 text-white hover:filter hover:brightness-95"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {getPageRange().map((page) => (
                <button
                    key={page}
                    className={`mr-2 text-xl px-4 py-2 rounded-md hover:filter hover:brightness-95 ${
                        page === currentPage
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-600"
                    }`}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className="mr-2 text-xl px-4 py-2 rounded-md bg-green-500 text-white hover:filter hover:brightness-95"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
            <button
                className="px-4 text-xl py-2 rounded-md bg-green-500 text-white hover:filter hover:brightness-95"
                onClick={goToLastPage}
                disabled={currentPage === totalPages}
            >
                Last
            </button>
        </div>
    );
}
