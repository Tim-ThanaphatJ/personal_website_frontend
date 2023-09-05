import { skillSet } from "@/constants";

export default function SkillsSection() {
  return (
    <div className="skills-section min-h-section w-full" id="skills-section">
      <section>
        <div className="content">
          <h1>
            Skills
            <hr></hr>
          </h1>
          <br />
          <br />
          <h2>The more I practice, the better I get 💪</h2>
          <br />
        </div>
      </section>
      <div className="grid grid-cols-4 gap-4">
        {skillSet.map((data, index) => {
          return (
            <ul key={data.header} className={`text-black`}>
              <h1>{data.header}</h1>
              {data.skillsSet.map((skillData, indexSkillData) => {
                return (
                  <li key={skillData}>{skillData}</li>
                )
              })}
            </ul>
          );
        })}
      </div>
    </div>
  )
}