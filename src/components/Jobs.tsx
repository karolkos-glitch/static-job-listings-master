import React, {useState, useEffect} from 'react'
import { JOB } from '../data';
import jsonDATA from '../data/data.json';
import Job from './Job';
import Filter from './utils/Filter'
import styled from 'styled-components';

const StyledWrap = styled.section`
max-width: 1190px;
margin: 0 auto;
`

const StyledListFilters = styled.ul`
width: 100%;
box-shadow: 0 1px 15px hsl(180, 29%, 50%);
background-color: white;
padding: .5rem 2rem;
margin: 0 0 1rem 0;
display: flex;
button {
  margin:0 1rem 0 0;
}
`

const StyledListJobs = styled.ul`
flex-wrap: wrap;
display: flex;
.jobs-List {
  width: 100%;
  margin: .8rem 0 ;
  box-shadow: 0 1px 15px hsl(180, 29%, 50%);
  border-radius: 5px;
}
`


const jobs_data : JOB[] = JSON.parse(JSON.stringify(jsonDATA));

const Jobs = () => {
  const [activeFilters, setactiveFilters] = useState<string[]>([]);
  const [jobs, setJobs] = useState<JOB[]>([]);
  const deleteFilter = (filter :string) => {
    setactiveFilters(prevFilters => prevFilters.filter(el => el!== filter))
  }
  
  useEffect(() => {
   console.log("Job list has changed!")
   setJobs(jobs_data);
   if(activeFilters.length !== 0){
     console.log("There are some filters!");
     let newJobs : JOB[] = jobs_data;
     for(let i=0; i < activeFilters.length; i++){
       let filterToApply = activeFilters[i];
       newJobs = newJobs.filter(job => {
         if(job.role === filterToApply || job.level === filterToApply || job.languages.find(lang => lang===filterToApply) || job.tools.find(tool => tool===filterToApply)) return true;
         return false;
        })
     }
     setJobs(newJobs);
   }
  //  eslint-disable-next-line react-hooks/exhaustive-deps
   }, [activeFilters])
   
  return (
    <StyledWrap>
      {activeFilters.length!== 0 && <StyledListFilters>
        {activeFilters.map(filter=> <li key={filter}><Filter action={deleteFilter} text={filter}/></li>)}
      </StyledListFilters>
      }
      <StyledListJobs>
        {jobs.map(job => <li className="jobs-List"><Job key={job.id} activateFilters={setactiveFilters} {...job}/></li>)}
      </StyledListJobs>
    </StyledWrap>
  )
}

export default Jobs
