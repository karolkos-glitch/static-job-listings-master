import React from 'react'
import { JOB } from '../data'
import styled from 'styled-components';


const StyledJobArticle = styled.article`
  background-color: white;
  box-shadow: 10% 10% 10% 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  border: 2px solid green;
  padding: 0 2rem;
  .job__row {
   
    .job__row__company-list {
      display: flex;
      align-items: center;
      li {
        margin:0 1rem 0 0;
        font-size: 0.8rem;
      }
      .job__row__company-list__company-name {
        color: hsl(180, 29%, 50%);
      }
      .job__row__company-list__FEATURE {
        background-color: hsl(180, 14%, 20%);
        color: white;
        border-radius: 10px;
        padding: 5px;
      }
      .job__row__company-list__NEW {
        background-color: hsl(180, 29%, 50%);
        color: white;
        border-radius: 10px;
        padding: 5px;
      }
    }

    .job__row__light-info-list{
      display: flex;
      color: hsl(180, 8%, 52%);
      li {
        margin:0 1rem 0 0;
      }
    }

    h2 {
      font-size: 1rem;
    }

    .job__row__filters-list {
      display: flex;
      align-items: center;
      li {
        margin: 0 0 0 1rem;
        .job__row__filters-list__filter {
          background-color: hsl(180, 31%, 95%);
          color: hsl(180, 29%, 50%);
          font-size: .8rem;
          padding: 5px 5px;
          border: none;
          
        }
        /* .job__row__filters-list__filter:hover {
            color: white;
            background-color:hsl(180, 29%, 50%);
          } */
      }
    }
  }

`
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
    <StyledJobArticle>
      <div className="job__row first-row" >
        {/* <img alt={`logo of ${props.company}`} src={`${props.logo}`} /> */}
        <ul className="job__row__company-list">
          <li className="job__row__company-list__company-name">{props.company}</li>
            {props.new && <li className="job__row__company-list__NEW"><strong>NEW!</strong></li>}
            {props.featured && <li className="job__row__company-list__FEATURE"><strong>FEATURED</strong></li>}
        </ul>
        <h2>{props.position}</h2>
        <ul className="job__row__light-info-list">
          <li>{props.postedAt}</li>
          <li>|</li>
          <li>{props.contract}</li>
          <li>|</li>
          <li>{props.location}</li>
        </ul>
      </div>
      <div className="job__row second-row">
        <ul className="job__row__filters-list">
            {filters.map(filter => <li key={filter}><button className="job__row__filters-list__filter"onClick={()=>setFilter(filter)}><strong>{filter}</strong></button></li>)}
        </ul>
      </div>
    </StyledJobArticle>
  )
}

export default Job
