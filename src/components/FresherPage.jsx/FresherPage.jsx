import './FresherPage.css';
import fresherImg from '../../assets/fresherimg.png';
// import fresher from '../../assets/fresh.png';

const FresherPage = () => {
  return (
    <div className='Fresher'>
      <div className="fresher-text">
        <h2>Our VLSI Courses for Fresh Graduates</h2>
        <h1>Go from student to hired with Courses,
        Mentorship & Labs.</h1>
        <p>&quot;We pride ourselves on having the most relevant and up-to-date skills
training available, and experienced mentors who are motivated to
guide and provide individualised training.&quot;</p>

<button className='fresher-btn'>Courses for fresher 
<i className="fas fa-arrow-right"></i></button>
      </div>
      <div className="fresher-img">
        <img src={fresherImg} alt="" />
        {/* <img src={fresher} alt="" /> */}
      </div>
    </div>
  )
}

export default FresherPage
