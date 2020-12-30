import React, {useState, useEffect, Fragment} from 'react'
import { JOB } from '../data';
import jsonDATA from '../data/data.json';
import Job from './Job';

const jobs_data : JOB[] = JSON.parse(JSON.stringify(jsonDATA));

const Jobs = () => {
  const [activeFilters, setactiveFilters] = useState<string[]>([]);
  const [jobs, setJobs] = useState<JOB[]>(jobs_data);
  useEffect(() => {
   console.log("Job list has changed!")
   if(activeFilters.length !== 0){
     console.log("There are some filters!");
     let newJobs : JOB[] = jobs;
     for(let i=0; i < activeFilters.length; i++){
       let filterToApply = activeFilters[i];
       newJobs = newJobs.filter(job => {
         if(job.role === filterToApply || job.level === filterToApply || job.languages.find(lang => lang===filterToApply) || job.tools.find(tool => tool===filterToApply)) return true;
         return false;
        })
     }
     setJobs(newJobs);
   }
   }, [activeFilters])
   
  return (
    <Fragment>
      <ul>
        <li><strong>Active Filters:</strong></li>
        {activeFilters.map(filter=> <li key={filter}>{filter}</li>)}
      </ul>
      {jobs.map(job => <Job key={job.id} activateFilters={setactiveFilters} {...job}/>)}
    </Fragment>
  )
}

export default Jobs
