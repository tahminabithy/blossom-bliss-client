import React, { useEffect, useState } from 'react'

export default function Teams() {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('/team.json').then(res => res.json()).then((data) => {
            console.log(data);
            setTeams(data)
        })
    }, [])
    return (
        <div className='container mx-auto py-8'>
            <div>
                <h1 className='my-8 md:my-20 text-center text-2xl  md:text-4xl font-regular md:font-bold'>Our<span className='text-[#F63E7B] md:font-bold ml-4'>Team Members</span>
                </h1>
                {/* --------------------------------- */}
                <div className='grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10'>
                    {
                        teams.map(team => (
                            // <div className='flex justify-center items-center bg-pink-600'>
                            //     <div className=''>
                            //         <img className='rounded-full' src={team.img} alt="" />
                            //         <div className=''>
                            //             <p>{team.name}</p>
                            //             <p>{team.expertise}</p>
                            //             <p>{team.experience}</p>
                            //             <p>Contact: {team.email}</p>
                            //         </div>
                            //     </div>

                            // </div>
                            <div className="card w-96">
                                <div className="card-body items-center text-center">
                                    <img className='rounded-full' src={team.img} alt="" />
                                    <div className=''>
                                        <p className='text-xl'>{team.name}</p>
                                        <p className='text-lg text-gray-500 mt-4'>Expertise: {team.expertise}</p>
                                        <p>{team.experience} experience</p>
                                        <p className='text-sm text-pink-600 mt-2'>Contact: {team.email}</p>
                                    </div>

                                </div>
                            </div>
                        ))
                    }

                </div></div>

        </div>
    )
}
