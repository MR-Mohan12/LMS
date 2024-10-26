import "./Why.css";
import skill_1 from "../../assets/skill1.png";
import skill_2 from "../../assets/skill2.png";
import skill_3 from "../../assets/skill3.png";

const Why = () => {
  return (
    <div className="why-skillvity">
      <h1>Why Skillvity?</h1>
      <div className="skilvity-about">
        <div>
          <img src={skill_3} alt="SkillImg" />
          <h2>Hands on Training</h2>
        </div>
        <div>
          <img src={skill_2} alt="SkillImg" />
          <h2>Practice Tests</h2>
        </div>
        <div>
          <img src={skill_1} alt="SkillImg" />
          <h2>1:1 Mentor Support</h2>
        </div>

        <div>
          <img src={skill_3} alt="SkillImg" />
          <h2>Hands on Training</h2>
        </div>

        <div>
          <img src={skill_2} alt="SkillImg" />
          <h2>Hands on Training</h2>
        </div>

        <div>
          <img src={skill_1} alt="SkillImg" />
          <h2> Practice Tests</h2>
        </div>
      </div>
    </div>
  );
};

export default Why;
