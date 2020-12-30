import React, {useState, useEffect} from 'react'
import { JOB } from '../data';
import jsonDATA from '../data/data.json';

const jobs_data : JOB[] = JSON.parse(JSON.stringify(jsonDATA));

const Jobs = () => {
  const [jobs, setJobs] = useState<JOB[]>(jobs_data);
  return (
    <div>
      {jobs.map(job => <li>{job.company}</li>)}
    </div>
  )
}

export default Jobs
