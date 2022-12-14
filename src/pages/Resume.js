export default function Resume(){
    return(
    <>
    {/* <div style={{backgroundColor:' rgb(40, 39, 39)', color:'white'}}> */}
    <div style={{backgroundColor:' black', color:'white'}}>

    
           {/* <!-- ***********************  ABOUT / PROFILE  *********************** --> */}
      <header>
        <div className="content-wrap">
          <h1>Aman Palod</h1>
          <h2>Student at University of Victoria</h2>
        </div>  
        {/* <!-- the div is a wrapper element and is used to be able to deal with the content and the backgrounf separately --> */}
      </header>


  {/* <!-- ***********************  WORK EXPERIENCE  *********************** --> */}
  <section className="work-experience">
        <div className="content-wrap item-details divider">

            <h2>Work Experience</h2>
            {/* <p>Optional paragraph for work experience summary. Not a part of the job details. Delete if not being used.</p> */}

            {/* <!-- Copy this whole <section> block to add more jobs. --> */}
          
            {/* <!-- End of Job block. --> */}
            {/* <!-- job 1--> */}
            <section className="job-item">

              <div className="job-details"><h3>Quality Engineer </h3>
                <p>Dometic</p>
                <p>Sept 2022 - Dec 2022</p></div>
              <div className="job-summary">
                {/* <!-- <p>Job summary goes here. Add as many paragraphs as you need.</p> --> */}
                {/* <!-- <p>Optional list:</p> --> */}
                <ul>
                  <li>Creating and maintaining Power BI dashboards and reports for quality analysis of manufactured machining parts after rigorous cleaning of data</li>
                  <li>Testing warrantable boat parts such as actuators, helms, joysticks to find potential bugs in the firmware to ascertain if a credit could be processed back to the customer</li>
                  <li>Implementing multiple features in MS Access Warranty forms using Visual Basic Language</li>
                </ul>
  
              </div>
              
            </section>

            {/* job 2 */}
            <section className="job-item">
              {/* <!-- divide the content into two tags to have 2 columns --> */}
              <div className="job-details"> 
                <h3>Techncial Support </h3>
                <p>BC Children's Hospital</p>
                <p>Jan 2022 - April 2022</p>
              </div>
            
              <div className="job-summary">
                {/* <!-- <p>Job summary goes here. Add as many paragraphs as you need.</p> --> */}
                {/* <!-- <p>Optional list:</p> --> */}
                <ul>
                  <li>Develop miscellaneous scripts to automate tasks such as cleaning data and exporting data to the database on the network using Powershell, Python, SQL server, and Pulover???s Macro recording software</li>
                  <li>Maintain upkeep of computers, apply policies and card readers on 500+ computers across facility</li>
                  <li>Explored ways to visualize database collaboration using Power BI, Python, and SQL Server</li>
                  <li>Generate, track, and assist in resolving Jira tickets</li>
                  <li>Assess and troubleshoot computer problems brought by doctors, nurses, and staff members</li>
                </ul>
              </div>
            
            </section>
            {/* job 3 */}
            <section className="job-item">

<div className="job-details"><h3>Teaching Assistant</h3>
  <p>University of Victoria</p>
  <p>Sept 2021 - Dec 2022</p></div>
<div className="job-summary">
  {/* <!-- <p>Job summary goes here. Add as many paragraphs as you need.</p> --> */}
  {/* <!-- <p>Optional list:</p> --> */}
  <ul>
    <li>Graded assignments and papers of over 150 students in the Engineering Economics course</li>
    <li>Researched and prepared pre-lecture readings for the students</li>
    <li>Reinforced the material presented by the teacher with students one-on-one and solved doubts</li>
  </ul>

</div>

</section>
      </div>
      </section>
      {/* <!-- ********************  PROJECTS / PORTFOLIO  ********************* --> */}
      <section className="projects">
        <div className="content-wrap divider">
            <h2>Featured Projects</h2>
            <p>View selected projects below. More information can be found at <a style={{color:'rebeccapurple'}} href="aman-palod.netlify.app" target="_blank">amanpalod.com</a>.</p>
             {/* <!-- _blank attr opens the link in a new tab. href = #some_id redirects the click to an element on the page with that id --> */}
             {/* <!-- Copy the whole <section> block to add more projects. --> */}
            <section className="project-item">
              <h3>React graphQL</h3> 
              {/* <!-- everything follwong the floating image would be to the left of it--> */}
              <ul>
              <li>Built an interface to pull user information from the github api through Graphql query</li>
              <li> Desgined the interactivity of the interface using React</li>
              <li> Handled the styling using the Bootstrap library</li>
              </ul>
            
            </section>

            <section className="project-item">
              <h3>Personal Website</h3>
              <ul>
              <li>Designed and built a personal website from scratch using React </li>
              <li> Implemented react routing to prevent a page refresh every time after a component is loaded </li>
              <li>Used Git version control and implemented continuous delivery using Netlify to automatically build upon a new
release.</li>
              </ul>
        
              </section>

            <section className="project-item">
              <h3>Todo's List</h3>
              <ul>
              <li>Developed a todo's list, the stepping stone in any developer's journey, first in javascript and then in React to as a good way to get started in web development </li>
           
              </ul>
            </section>



      </div>
        {/* <!-- End of Project block. --> */}
      </section>



      {/* <!-- ******************  EDUCATION & CERTIFICATIONS ****************** --> */}
      <section className="education">
        <div className="content-wrap item-details">
            <h2>Education</h2>

            {/* <!-- Copy this whole <section> block to add more schools. --> */}
            <section>
              <h3>University of Victoria - Victoria, BC</h3>
              <p>Software Engineering 2020 - present</p>
              <p></p>
            </section>
            
            {/* <!-- End of School block. --> */}
        </div>
      </section>
      </div>

      {/* <!-- *****************  CONTACT INFO / SOCIAL MEDIA  ***************** --> */}
      <footer id="footer">
        <div className="content-wrap">
            <h2>Let's Keep in Touch!</h2>

            {/* <!-- Social media and contact links. Add or remove any networks. --> */}
            <ul className="flex-container">
              <li><a href="mailto:palod.aman@gmail.com">palod.aman@gmail.com</a></li>
              <li><a> +1 2368827691</a></li>
              <li><a href="https://aman-palod.netlify.app" target="_blank">My website</a></li>
             
              <li><a href="https://www.linkedin.com/in/aman-palod-3a09911b4/" target="_blank">LinkedIn</a></li>
            {/* <!-- A hash - `#` within a hyperlink specifies an HTML element id to which the window should be scrolled. */}
            {/* code guide is a good guide for css about rules and conventions for writing sustainable code --> */}
            {/* <!-- target attr is used to decide where the website will open (whether in same tab or a new tab) target="_blank" = new tab --> */}
            </ul>
        </div>
      </footer>
   
    </>
    )
}