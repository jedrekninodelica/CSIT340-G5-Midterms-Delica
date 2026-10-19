function FeatureCard({tag, title, description}){
    return (
        <div className="rounded-xl bg-[#F3E6D5] p-6">
            <span className="rounded-full bg-[#800020] px-4 py-1 text-base font-bold text-[#FFF9F2]">
                {tag}
            </span>
            <h3 className="mt-4 text-xl font-bold text-[#000000]">{title}</h3>
            <p className="mt-2 text-[#000000]">{description}</p>
        </div>
    )
}

export default FeatureCard;