import { url } from 'inspector';
import React from 'react'
import { JOB } from '../data'

interface JobProps extends JOB {
  activateFilters : React.Dispatch<React.SetStateAction<string[]>>
}

const Job : React.FC<JobProps> = (props) => {
const filters = [props.role, props.level,...props.languages,...props.tools];

const setFilter = (filter: string) => {
  console.log("Trying to add filter...")
  props.activateFilters(currentFilters => {
    if(!currentFilters.find(el => filter===el)){
    return [...currentFilters, filter];
    }
    return currentFilters;
  })
}

  return (
    <article>
      <div className="first-row" >

        {/* <img alt={`logo of ${props.company}`} src={`${props.logo}`} /> */}
      </div>
      <div className="second-row">
      <ul>
        <li>{props.company}</li>
          {props.new && <li>NEW</li>}
          {props.featured && <li>FEATURED</li>}
      </ul>
      <h2>{props.position}</h2>
      <ul>
        <li>{props.postedAt}</li>
        <li>{props.contract}</li>
        <li>{props.location}</li>
      </ul>
      </div>
      <div className="third-row">
        <ul>
            {filters.map(filter => <li key={filter}><button onClick={()=>setFilter(filter)}>{filter}</button></li>)}
        </ul>
      </div>
    </article>
  )
}

export default Job
