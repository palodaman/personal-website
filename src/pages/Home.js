export default function Home(){
    return (
    <>
    <div className="home"> 
        {/* div for image */}
        <div className="img-container-home" > 
            <figure>
            <img src="/pics/jam.jpg" className="my-img"  alt="Pic of a code monkey" /> 
            <figcaption className="img-wrapper">
                <em> pic by Navansh Yadav, clicked during one of our jamming sessions</em>
            </figcaption>
            </figure>
        </div>

        <div className="description">
            <p> 
             Hi! I am a third year software engineering student at the University of Victoria. This personal website, built from scratch, is the very testament of my fascination and fervour for web development. 
          </p>
          <p>Whenever I am not programming, I am usually reading, jamming with my ukulele, lost online in the depths of technical documentation and tech conferences, or spending some recreational time in the nature. Special mention to restocking the costly groceries (plight of an international student).</p>
            <p>My learning curve so far has been exponential and I expect it to remain the same with the ever evolving technologies. In the past one year, I have had so many moments of clarities about behind-the-scenes-work of the web, something that I have used for a good part of the last decade, that it's been mind-boggling. However, I am aware that there's a long road ahead for me and I am excited about the journey of immense learning and growth.</p>
            <p>If you want to collobarate, or chat, feel free to reach out to me.</p>
        </div>    

    
    </div>
    
    
    </>
    
    )
}