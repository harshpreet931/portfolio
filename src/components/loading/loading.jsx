const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            {/* TailwindCSS loading spinner */}
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500"></div>
        </div>
    )
}

export default Loading;