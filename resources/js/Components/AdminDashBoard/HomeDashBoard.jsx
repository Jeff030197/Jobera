import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
import 
 { ResponsiveContainer } 
 from 'recharts';

 import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
   ArcElement
 } from 'chart.js';
 import { Bar, Pie } from 'react-chartjs-2';

 import '../../../css/admin.css'

 
function HomeDashboard({ users, applicants, employer, job_posted, applications }) {

console.log(applications)
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

  const options = {
   
  };

      const updated = [{
        jobs: job_posted.length,
    
      },
      {       
        employers: employer.length,       
      },
    {
      applicants: applicants.length
    }
  ]

  const pie = {
    labels: ['Jobs', 'Employers', 'Applicants', 'Applications'],
    datasets: [
      {
        label: 'JOBERA',
        data: [job_posted.length, employer.length, applicants.length, applications.length],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(87, 206, 86, 0.2)',
       
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(87, 206, 86, 1)',
        
        ],
        borderWidth: 1,
      },
    ],
  };
     
 const data = {
    labels: ['Jobs', 'Employers', 'Applicants', 'Applications'],
    datasets: [
      {
        label: 'JOBERA DATA',
        data:  [job_posted.length, employer.length, applicants.length, applications.length],
        backgroundColor: ['blue', 'red', 'green'],
      },  
    ],
  };


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
                {job_posted.length}
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Employers</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
              {employer.length}
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Applicants</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                {applicants.length}
            </div>
            
            <div className='card'>
                <div className='card-inner'>
                    <h3>ACCOUNTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
              {users.length}
            </div>

            
        </div>

        <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
        <Bar  data={data} options={options}/>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="99%">
        <Pie data={pie} />
        </ResponsiveContainer>
        </div>
    </main>
    </>
  )
}

export default HomeDashboard


{/* <ResponsiveContainer width="100%" height="100%">
<BarChart
width={500}
height={300}
data={updated}
margin={{
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
}}
>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="JOBERA" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="jobs" fill="#8884d8" />
    <Bar dataKey="employers" fill="#82ca9d" />
    <Bar dataKey="applicants" fill="#54d813" />
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
</ResponsiveContainer> */}





























