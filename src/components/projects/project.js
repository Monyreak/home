// Import React and the CSS file for styling
import React from "react";
import './project.css';

const Project = () => {
    return (
        <section id="proj">
            <h2 className="projTitle">My Projects</h2>
            <p className="projDesc">These are all my projects:</p>
            <div className="projects">
                {/* iCook Project */}
       
                {/* Reliable File Replication Project */}
                <div className="project">
                    <a href="https://github.com/Monyreak/UDP-file-transfer" target="_blank" rel="noopener noreferrer">
                        <div className="projectText">
                            <h3>Reliable File Replication</h3>
                            <p>Developed a robust UDP-based Go-Back-N file transfer protocol, enabling reliable data transmission across multiple endpoints, featuring custom packet headers, concurrent client management, and error handling for packet loss.</p>
                        </div>
                    </a>
                </div>
                {/* ESP32-C3 Projects */}
                <div className="project">
                    <a href="https://github.com/Monyreak/esp32c3_weather_station" target="_blank" rel="noopener noreferrer">
                        <div className="projectText">
                            <h3>ESP32-C3 Projects</h3>
                            <p>Innovative projects utilizing ESP32-C3, including a BLE peripheral for seamless data communication and a weather station fetching and posting data to a local server, demonstrating proficiency in IoT development.</p>
                        </div>
                    </a>
                </div>
                {/* Replicated Key-Value Store */}
                <div className="project">
                    <a href="https://github.com/Monyreak/Replicated-Key-Value-store-" target="_blank" rel="noopener noreferrer">
                        <div className="projectText">
                            <h3>Replicated Key-Value Store</h3>
                            <p>A distributed key-value store with Flask endpoints, leveraging vector clocks for causal consistency and JSON for data integrity, encapsulated in Docker containers for testing and scalability.</p>
                        </div>
                    </a>
                </div>
                {/* Basys 3 Project */}
                <div className="project">
                    <a href="https://github.com/Monyreak/iCook" target="_blank" rel="noopener noreferrer">
                        <div className="projectText">
                            <h3>iCook</h3>
                            <p>A comprehensive cooking app designed to bring out the chef in you. Features include recipe management, nutritional information, and a smart shopping list.</p>
                        </div>
                    </a>
                </div>
                    
                <div className="project">
                    <a href="https://github.com/Monyreak/Slug-simulator-" target="_blank" rel="noopener noreferrer">
                        <div className="projectText">
                            <h3>Basys 3 Project</h3>
                            <p>An FPGA-based slug simulator game crafted in Verilog, utilizing state machine logic for game mechanics and VGA interface </p>
                        </div>
                    </a>
                </div>
                <div className="project">
                <a href="https://github.com/Monyreak/Soccer-league-simulation" target="_blank" rel="noopener noreferrer">
                    <div className="projectText">
                        <h3>Soccer League Simulation</h3>
                        <p>C++ Linked List, Binary Tree, Hash Class template</p>
                    </div>
                </a>
                </div>
            </div>
        </section>
    );      
};

export default Project;

