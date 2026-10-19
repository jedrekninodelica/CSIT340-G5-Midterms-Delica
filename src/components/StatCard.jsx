function StatCard({value, label}){
    return (
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-[#800020] px-6 py-4 text-white shadow-md">
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-lg">{label}</p>
        </div>
    )
}

export default StatCard