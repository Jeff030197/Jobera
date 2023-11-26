import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Main() {

    const data = [
        {
          name: 'Web Development',
          applicants: 4000,
          job_posted: 2400,
          amt: 2400,
        },
        {
          name: 'Social Media Management',
          applicants: 3000,
          job_posted: 1398,
          amt: 2210,
        },
        {
          name: 'Virual Assistant',
          applicants: 2000,
          job_posted: 9800,
          amt: 2290,
        },
        {
          name: 'SEO',
          applicants: 2780,
          job_posted: 3908,
          amt: 2000,
        },
        {
          name: 'Wordpress Developer',
          applicants: 1890,
          job_posted: 4800,
          amt: 2181,
        },
        {
          name: 'Graphic Design',
          applicants: 2390,
          job_posted: 3800,
          amt: 2500,
        },
        {
          name: 'Others',
          applicants: 200,
          job_posted: 800,
          amt: 2100,
        },
      ];
     

  return (
    <>
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Job Posted</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Employers</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Applicants</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ACCOUNTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="job_posted" fill="#8884d8" />
                <Bar dataKey="applicants" fill="#82ca9d" />
                <Bar dataKey="amt" fill="#54d813" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="job_posted" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="applicants" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
    </>
  )
}

export default Main





























