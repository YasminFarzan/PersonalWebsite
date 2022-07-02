import {Link} from "react-router-dom"

function ProjectPage(){

    return(
        <div>
            <nav>
                <p>
                    In Project 1, I created a single HTML page that has a button that when clicked, sends a request to APOD (Astronomy Picture of the Day) API by NASA. The response received from the server is processed, and my page will display the information about the received object, including the picture and its description.
                </p>

                <img src={require("./Project1.png")} alt={"Project 1"} width={400} height={250}/>
                <p>

                </p>
                <Link to="/projects/1">Project 1: Exploring HTML, CSS, and JavaScript </Link>
                <p>
                    ---------------------------------------------------
                </p>
                <p>
                    In Project 2, I created a layout using React. Each row contains eight blocks. Depending on the number, even, odd, or prime, the style of each block changes. The odd have a block that’s yellow. The even ones have a block that’s green, and the prime ones have a red block with a solid black border.
                </p>
                <img src={require("./Project2.png")} alt={"Project 2"} width={250} height={250}/>
                <p>

                </p>
                <Link to="/projects/2">Project 2: Exploring React Components</Link>
                <p>
                    ---------------------------------------------------
                </p>
                <p>
                    In Project 3, we had the freedom to choose to display anything in P5. I created a purple Canvas with a circle in the middle.
                </p>
                <img src={require("./Project3.png")} alt={"Project 3"} width={250} height={250}/>
                <p>

                </p>
                <Link to="/projects/3">Project 3: Exploring P5</Link>
                <p>
                    ---------------------------------------------------
                </p>
                <p>
                    In Project 4, I created a line graph based on the resource JSON file that represents finance over time. The data is from Yahoo Finance Chart API. When the datapoints are clicked, their value is displayed.
                </p>
                <img src={require("./project4.png")} alt={"Project 4"} width={250} height={250}/>
                <p>

                </p>
                <Link to="/projects/4">Project 4: D3 and Data Visualization</Link>
            </nav>
        </div>



    )
}

export default ProjectPage