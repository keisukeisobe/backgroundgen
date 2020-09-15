import React, {useState, useEffect} from "react"
import './filter.css';

function Filter() {
  const [moduleFilter, setModuleFilter] = useState([
    {
      acronym: "AI",
      title: "Acquisitions Incorporated",
      status: true
    },
    {
      acronym: "ALCurseOfStrahd",
      title: "AL: Curse of Strahd",
      status: true
    },
    {
      acronym: "ALElementalEvil",
      title: "AL: Elemental Evil",
      status: true
    },
    {
      acronym: "ALRageofDemons",
      title: "AL: Rage of Demons",
      status: true
    },
    {
      acronym: "BGDIA",
      title: "Baldur's Gate: Descent Into Avernus",
      status: true
    },
    {
      acronym: "CoS",
      title: "Curse of Strahd",
      status: true
    },
    {
      acronym: "ERLW",
      title: "Eberron: Rising from the Last War",
      status: true
    },
    {
      acronym: "EGW",
      title: "Explorer's Guide to Wildemount",
      status: true
    },
    {
      acronym: "GoS",
      title: "Ghosts of Saltmarsh",
      status: true
    },
    {
      acronym: "GGR",
      title: "Guildmaster's Guide to Ravnica",
      status: true
    },
    {
      acronym: "MOT",
      title: "Mythic Odyssey of Theros",
      status: true
    },
    {
      acronym: "PHB",
      title: "Player's Handbook",
      status: true
    },
    {
      acronym: "SCAG",
      title: "Sword Coast Adventurer's Guide",
      status: true
    },
    {
      acronym: "ToA",
      title: "Tomb of Annihilation",
      status: true
    },
    {
      acronym: "PSA",
      title: "PS: Amonkhet",
      status: true
    },
    {
      acronym: "PSI",
      title: "PS: Innistrad",
      status: true
    }
  ]);
  console.log(moduleFilter.filter(module=>module.status));
  const generateFilterPill = () => {
    return (
      <div className="filter-view">
        {moduleFilter.filter(module => module.status).map((module, index) => {
          return (
            <div className="filter-mini-pill" key={index}>
              {module.title}
            </div>
          );
        })}
      </div>
    )
  }

  return (
    <>
      <h3 className="tertiary-header">Filter Sourcebooks</h3>
      {generateFilterPill()}
    </>
  );
}

export default Filter;