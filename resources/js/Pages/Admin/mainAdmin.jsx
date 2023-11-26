import React from 'react'

import JobPosted from '@/Components/Admin/JobPosted';
import Main from '@/Components/Admin/Main';
import Applicants from '@/Components/Admin/Applicants';
function mainAdmin(props) {



     

      const main = () =>{
        switch(props.active){
          case "job-posted":
            return <JobPosted />
          break
          case "applicants":
            return <Applicants />
       break
          default: 
              return <Main />
              break
       
        }
      }

  return (
    <main className='main-container'>
    {
     main()
    }

    </main>
  )
}

export default mainAdmin