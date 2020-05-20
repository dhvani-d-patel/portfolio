import React from 'react';
import {Jumbotron} from './components/Jumbotron';
import { Layout } from './components/Layout';
import './App.css';

const aboutStyle = {borderStyle: "groove", padding: "2%"}

export const About = () => {
    return (
        <React.Fragment>
            <Jumbotron />
            <Layout className="inner-background">
                <h2 className="inner-heading">About Me</h2>
                <br />
                <div className="inner-content" style={aboutStyle}>
                    <p>Hello!</p>

                    <p>
                        My name is Dhvani Patel and my name means sound. I am a fun loving and ambitious person who loves coding 
                        and solving puzzles like suduko and jigsaw puzzles. I am a sucker for Science Fiction and Superhero movies.
                        My all time favorite movies include the Lord of the Ring movie series, The Dark Knight triology and the 
                        animated Wonder Woman movies.
                    </p>

                    <p>
                        I am a Software Engineer and graduated in May 2020 from Rochester Institute of Technology (New York) with a
                         Master's of Science degree in Computer Science. Currently I am actively looking for full-time job opportunities
                         and can start working from July 2020. 
                    </p>

                    <p>
                        During my journey at RIT, I had a chance to intern/co-op with Retail Business Services, Ahold USA. I worked 
                        with the Emerging Technology team on numerous projects following an agile methodology for software development, 
                        to create image recognition technologies along with databases, data pipelining and deep learning models.
                    </p>

                    <p>
                        I was also a Graduate Assistant with the Computer Science Department at RIT. It was an honor to work for my 
                        department as a Lab Manager and my job responsibilities included administering labs and maintaining the network 
                        infrastructure for over 300 systems running on MacOS, Linux (Ubuntu) and Windows OS. I was also awarded 75% 
                        scholarship for the same.
                    </p>

                    <p>
                        I am a passionate coder and would love to work on projects that would help me to showcases my skills and knowledge
                        to build something that not only makes profits but also help the mankind to use technology in the right way.
                    </p>
                </div>
            </Layout>
            
        </React.Fragment>
    )
}