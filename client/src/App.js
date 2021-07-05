import React, {useState} from 'react'
import ServiceCard from './components/Service/ServiceCard'
import Service from './components/Service/Service'
import { Menu } from './EnumMenu'
import Head from './components/Head/Head'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import ProjectCard from './components/Project/ProjectCard'
import ContactCard from './components/Contact/ContactCard'
import Footer from './components/Footer/Footer'
import Legal from './components/Legal/Legal'

const App = () => {

    const [menu, setMenu] = useState(Menu.INIT)

    const getContent = () => {
        switch (menu) {
            case Menu.INIT:
                return 
            case Menu.SERVICE:
                return <Service />
            case Menu.CONTACT:
                return <Contact />
            case Menu.PROJECT:
                return <Project />
            case Menu.LEGAL:
                return <Legal />
            default:
                break;
        }
    }

    return <div className="container">
                <Head setMenu={setMenu}/>
                <div className="card-deck">
                    <ServiceCard setMenu={setMenu}/>
                    <ProjectCard setMenu={setMenu}/>
                    <ContactCard setMenu={setMenu}/>
                </div>
                {getContent()}
                <Footer setMenu={setMenu}/>
            </div>
}

export default App