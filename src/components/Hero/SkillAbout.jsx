import './SkillAbout.css';
import text from '../../assets/text.png';
import app from '../../assets/app.png';
import diamond from '../../assets/dimond.png';
import tool from '../../assets/tool.png';
import experince from '../../assets/experince.png';

const SkillAbout = () => {
  return (
//    <>
   <div className="skillabout">
    <div>
        <img src={text} alt="imgabout" />
        <p>Pragmatic Approach</p>
    </div>
    <div>
        <img src={experince} alt="imgabout" />
        <p>Experience Team</p>
    </div>

   <div>
        <img src={tool} alt="imgabout" />
        <p>Industry Tool <br />Access</p>
    </div>
   
    <div>
        <img src={diamond} alt="imgabout" />
        <p>Cutting Edge <br />
        Curriculum</p>
    </div>

    <div>
        <img src={app} alt="imgabout" />
       <p>Mobile App</p>
    </div>

    </div>
//    </>
  )
}

export default SkillAbout
