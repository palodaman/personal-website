export default function Home(){
    return (
    <>
    <div className="home"> 
        {/* div for image */}
        <div className="img-container-home" > 
            <figure>
            <img src="/pics/pic.jpg" className="my-img"  alt="Pic of a code monkey" /> 
            <figcaption className="img-wrapper">
                <em> pic by gettyimages</em>
            </figcaption>
            </figure>
        </div>

        <div className="description">
            <p> 
             Hi! I am a third year software engineering student at the University of Victoria. This portfolio website is the very testament of my fascination and fervour for web development. 
          </p>
          <p>Whenever I am not programming, I am usually reading, jamming with my ukulele, lost online in the depths of technical documentation and tech conferences, or spending some recreational time in the nature. Special mention to restocking the costly groceries (plight of an international student)</p>
          <p></p>
        </div>    

    
    </div>
    
    
    </>
    
    )
}