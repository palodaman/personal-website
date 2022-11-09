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
             Hi! I am a third year software engineering student at the University of Victoria. This portfolio website, built from scratch, is the very testament of my fascination and fervour for web development. 
          </p>
          <p>Whenever I am not programming, I am usually reading, jamming with my ukulele, lost online in the depths of technical documentation and tech conferences, or spending some recreational time in the nature. Special mention to restocking the costly groceries (plight of an international student).</p>

            <p>While I am an ardent fan of technology, and would love to delve deeper into developing futuristic platforms, I am also concerned with the down sides of the social media that it has in manipulating the human behavior and polarizing the people in the society. Part of the reason why I tend to stay away from most of the social media applications. They are a time sink and also handle your data in unethical and monetize the same in a borderline creepy manner. Also, social media is a cesspool these days, and I can totally do without that. </p>
            
            <p>If you want to collobarate, or chat, feel free to reach out to me.</p>
        </div>    

    
    </div>
    
    
    </>
    
    )
}