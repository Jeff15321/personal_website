import React from "react";
import { useExperience } from "../contexts/ExperienceContext";

export default function Experience() {
  const { experience } = useExperience();

  let experienceHTML: JSX.Element[][] = [];
  
  experience.forEach((experienceItem, index) => {
    experienceHTML[index] = [];
    experienceItem.forEach((element) => {
      let tmp_element: JSX.Element[] = [];
      const phrases = element.split("\\");
      
      phrases.forEach((phrase, phraseIndex) => {
        if (phraseIndex % 2 === 0) {
          tmp_element.push(<span key={phraseIndex}>{phrase}</span>);
        } else {
          tmp_element.push(<span key={phraseIndex} style={{color: 'red'}}>{phrase}</span>);
        }
      });

      experienceHTML[index].push(<>{tmp_element}</>);
    });
  });
  
  return (
    <div className="experienceContainer">
      <table className="experienceTable">
        <thead>
          <tr className="experienceTableRow">
            <th className="experienceTableHeader dateColumn">Date</th>
            <th className="experienceTableHeader organizationPositionColumn">Organization and Position</th>
            <th className="experienceTableHeader descriptionColumn">Description</th>
          </tr>
        </thead>
        <tbody>
          {experienceHTML.map((line, index) => (
            <tr key={index} className="experienceTableRow">
              <td className="experienceTableCell dateColumn">{line[0]}</td>
              <td className="experienceTableCell organizationPositionColumn">
                <div className="organizationPositionWrapper">
                  <div className="organizationColumn">{line[1]}</div>
                  <div className="positionColumn">{line[2]}</div>
                </div>
              </td>
              <td className="experienceTableCell descriptionColumn">
                <pre className="experienceTableCellPre">{line[3]}</pre>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
