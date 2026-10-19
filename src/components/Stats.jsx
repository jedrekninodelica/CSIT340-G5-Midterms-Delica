function Stats({ stars, forks, issues }) {
  return (
    <div className="flex justify-center gap-6 pb-8">
        <div className="w-48 rounded-xl bg-[#F3E6D5] py-4 text-center">
            <p className="text-4xl font-bold">{stars}</p>
            <p className="mt-1 text-lg text-[#000000]">Stars</p>
        </div>
        <div className="w-48 rounded-xl bg-[#F3E6D5] py-4 text-center">     
         <p className="text-4xl font-bold">{forks}</p>
            <p className="mt-1 text-lg text-[#000000]">Forks</p>
        </div>
        <div className="w-48 rounded-xl bg-[#F3E6D5] py-4 text-center">
            <p className="text-4xl font-bold">{issues}</p>
            <p className="mt-1 text-lg text-[#000000]">Issues reported</p>
        </div>
    </div>
  );
}

export default Stats