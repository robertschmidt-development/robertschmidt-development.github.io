import React from 'react'
import classes from './Service.module.sass'
import reactLogo from'./react-logo.jpg';
import phpLogo from'./php-logo.png';
import mysqlLogo from'./mysql-logo.png';
import pythonLogo from'./python-logo.png';


const Service = () => {

    return <>
               <br/>
                <ul className={`list-group list-group-flush ${classes.detail}`}>
                    <li className="list-group-item">
                        <h1>Applications from Zero to Finish</h1><br/>
                    </li>
                    <li className="list-group-item">
                        <h4>Consulting, Planing, Prototyping and Deploying</h4>
                        <br/>
                        <p>I will transform your ideas and business processes to apps that work and make your business perform the best it can in a digital age!</p>
                    </li>
                    {/* <li className="list-group-item">
                        <h4>Testing, Logs and Maintenance</h4>
                        <br/>
                        <p>To make your business keep rolling, Your App will be deployed with a high test coverage to make your business keep rolling. If something went wrong, I will fix it</p>
                    </li> */}
                    <li className="list-group-item">
                        <h4>Know-how in Mechanical Engineering, Business Economics and Jurisprudence</h4>
                        <br/>
                        <p>As an owner of a Masters Degree in Mechanical Engineering and a Bachelors Degree in Business Law I can relate to problems and provide solutions especially in these fields of business.</p>
                    </li>
                    <li className="list-group-item">
                        <h4>Your problems solved!</h4>
                        <br/>
                        <p>Programming can be used to solve a huge amout of problems that could arise in a business. Simply get in touch with me and I will turn a problem into a competitive advantage for your business! 
                        </p>
                    </li>
                </ul>
                <br/>
                <ul className={`list-group list-group-flush ${classes.detail}`}>
                    <li className="list-group-item">
                        <h1>Technical Details</h1><br/>
                        <p>I am fast to get into any new technology. The main tech-stack I use the most and keep at state of the art is:</p>
                        <table className={`table table-borderless ${classes.techstack}`}>
                            <thead>
                            <tr>
                                <th><h4>Frontend</h4></th>
                                <th><h4>Backend</h4></th>
                                <th><h4>Database</h4></th>
                                {/* <th><h4>Other</h4></th> */}
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><img style={{width:'65%', height:'65%'}} alt="logo of react" src={reactLogo}/></td>
                                <td><img style={{width:'30%', height:'30%', marginTop:'1.2em'}} alt="logo of php" src={phpLogo}/><img style={{width:'45%', height:'45%', marginLeft:'1.5em', marginTop: '1.3em'}} alt="logo of python" src={pythonLogo}/></td>
                                <td><img style={{width:'55%', height:'55%'}} alt="logo of mysql" src={mysqlLogo}/></td>
                                {/* <td></td> */}
                            </tr>
                            </tbody>
                        </table>
                    </li>
                </ul>
            </>
}

export default Service