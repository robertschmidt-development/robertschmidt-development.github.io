import React, {useState} from 'react'
import ServiceCard from './components/Service/ServiceCard'
import Service from './components/Service/Service'
import { Menu } from './EnumMenu'
import Head from './components/Head/Head'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Testimonials from './components/Testimonials/Testimonials'
import ProjectCard from './components/Project/ProjectCard'
import TestimonialsCard from './components/Testimonials/TestimonialsCard'
import ContactCard from './components/Contact/ContactCard'
import Footer from './components/Footer/Footer'
import Legal from './components/Legal/Legal'

const App = () => {

    const [menu, setMenu] = useState(Menu.INIT)

    const deck = <>
                    <div className="card-deck">
                            <ServiceCard setMenu={setMenu}/>
                            <ProjectCard setMenu={setMenu}/>
                    </div>
                    <br/>
                    <div className="card-deck">
                            <TestimonialsCard setMenu={setMenu}/>
                            <ContactCard setMenu={setMenu}/>
                    </div>
                    <Footer setMenu={setMenu}/>
                </>

    const getContent = () => {
        switch (menu) {
            case Menu.INIT:
                return deck
            case Menu.SERVICE:
                return <Service setMenu={setMenu}/>
            case Menu.TESTIMONIALS:
                return <Testimonials setMenu={setMenu}/>
            case Menu.CONTACT:
                return <Contact setMenu={setMenu}/>
            case Menu.PROJECT:
                return <Project setMenu={setMenu}/>
            case Menu.LEGAL:
                return <Legal setMenu={setMenu}/>
            default:
                break;
        }
    }


    return <div className="container">
                <Head />
                {getContent()}
            </div>
}

export default App