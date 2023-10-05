import Jerewebp from "../assets/Jere.webp"

export default function About() {
    return(
        <div>
            <h1>About Me</h1>
            <img src={Jerewebp} alt="Jeremias Longo" width="300px"/>
            <p>¡Hola! Soy Jere, el creador de esta increíble App. Soy apasionado por la tecnología y el desarrollo web, y decidí crear 
                esta App para mi proyecto Rick & Morty de Henry.</p>
            <p>Si tienes alguna pregunta o sugerencia, no dudes en contactarme:</p>

            <ul>
                <li>Email: jerelongo09@gmail.com</li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/jere-longo/" target="_blank">Mi Perfil</a></li>
                <li>GitHub: <a href="https://github.com/JLjerelongo" target="_blank">Mi GitHub</a></li>
            </ul>
        </div>
    )
}