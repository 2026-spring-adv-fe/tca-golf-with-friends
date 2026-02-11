import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="p-3" data-theme='cupcake'>
            <h1 className="text-3xl underline font-bold text-center">Golf With Your Friends</h1>
            <div className="card">
                <button
                    onClick={() => setCount((count) => count + 1)}
                    className="btn btn-lg btn-outline w-full lg:w-64 btn-primary my-5"
                >
                    count is {count}
                </button>
            </div>

            <div className="card bg-base-100 w-full shadow-lg my-5">
                <div className="card-body p-2">
                    <h2 className="card-title">Leaderboard</h2>
                    <p>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 w-full shadow-lg my-5">
                <div className="card-body p-2">
                    <h2 className="card-title">Leaderboard</h2>
                    <p>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 w-full shadow-lg my-5">
                <div className="card-body p-2">
                    <h2 className="card-title">Leaderboard</h2>
                    <p>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 w-full shadow-lg my-5">
                <div className="card-body p-2">
                    <h2 className="card-title">Leaderboard</h2>
                    <p>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 w-full shadow-lg my-5">
                <div className="card-body p-2">
                    <h2 className="card-title">Leaderboard</h2>
                    <p>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 w-full shadow-lg my-5">
                <div className="card-body p-2">
                    <h2 className="card-title">Leaderboard</h2>
                    <ul className="timeline timeline-vertical">
                        <li>
                            <div className="timeline-start timeline-box">
                                First Macintosh computer
                            </div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="text-primary h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <hr className="bg-primary" />
                        </li>
                        <li>
                            <hr className="bg-primary" />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="text-primary h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">
                                iMac
                            </div>
                            <hr className="bg-primary" />
                        </li>
                        <li>
                            <hr className="bg-primary" />
                            <div className="timeline-start timeline-box">
                                iPod
                            </div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="text-primary h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">
                                iPhone
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start timeline-box">
                                Apple Watch
                            </div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card bg-base-100 w-full shadow-lg my-5">
                <div className="card-body p-2">
                    <h2 className="card-title">Leaderboard</h2>
                    <div className="overflow-x-auto">
                        <table className="table table-xs">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>company</th>
                                    <th>location</th>
                                    <th>Last Login</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Littel, Schaden and Vandervort</td>
                                    <td>Canada</td>
                                    <td>12/16/2020</td>
                                    <td>Blue</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Zemlak, Daniel and Leannon</td>
                                    <td>United States</td>
                                    <td>12/5/2020</td>
                                    <td>Purple</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Carroll Group</td>
                                    <td>China</td>
                                    <td>8/15/2020</td>
                                    <td>Red</td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>Marjy Ferencz</td>
                                    <td>Office Assistant I</td>
                                    <td>Rowe-Schoen</td>
                                    <td>Russia</td>
                                    <td>3/25/2021</td>
                                    <td>Crimson</td>
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>Yancy Tear</td>
                                    <td>Community Outreach Specialist</td>
                                    <td>Wyman-Ledner</td>
                                    <td>Brazil</td>
                                    <td>5/22/2020</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>6</th>
                                    <td>Irma Vasilik</td>
                                    <td>Editor</td>
                                    <td>Wiza, Bins and Emard</td>
                                    <td>Venezuela</td>
                                    <td>12/8/2020</td>
                                    <td>Purple</td>
                                </tr>
                                <tr>
                                    <th>7</th>
                                    <td>Meghann Durtnal</td>
                                    <td>Staff Accountant IV</td>
                                    <td>Schuster-Schimmel</td>
                                    <td>Philippines</td>
                                    <td>2/17/2021</td>
                                    <td>Yellow</td>
                                </tr>
                                <tr>
                                    <th>8</th>
                                    <td>Sammy Seston</td>
                                    <td>Accountant I</td>
                                    <td>O'Hara, Welch and Keebler</td>
                                    <td>Indonesia</td>
                                    <td>5/23/2020</td>
                                    <td>Crimson</td>
                                </tr>
                                <tr>
                                    <th>9</th>
                                    <td>Lesya Tinham</td>
                                    <td>Safety Technician IV</td>
                                    <td>Turner-Kuhlman</td>
                                    <td>Philippines</td>
                                    <td>2/21/2021</td>
                                    <td>Maroon</td>
                                </tr>
                                <tr>
                                    <th>10</th>
                                    <td>Zaneta Tewkesbury</td>
                                    <td>VP Marketing</td>
                                    <td>Sauer LLC</td>
                                    <td>Chad</td>
                                    <td>6/23/2020</td>
                                    <td>Green</td>
                                </tr>
                                <tr>
                                    <th>11</th>
                                    <td>Andy Tipple</td>
                                    <td>Librarian</td>
                                    <td>Hilpert Group</td>
                                    <td>Poland</td>
                                    <td>7/9/2020</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>12</th>
                                    <td>Sophi Biles</td>
                                    <td>Recruiting Manager</td>
                                    <td>Gutmann Inc</td>
                                    <td>Indonesia</td>
                                    <td>2/12/2021</td>
                                    <td>Maroon</td>
                                </tr>
                                <tr>
                                    <th>13</th>
                                    <td>Florida Garces</td>
                                    <td>Web Developer IV</td>
                                    <td>Gaylord, Pacocha and Baumbach</td>
                                    <td>Poland</td>
                                    <td>5/31/2020</td>
                                    <td>Purple</td>
                                </tr>
                                <tr>
                                    <th>14</th>
                                    <td>Maribeth Popping</td>
                                    <td>Analyst Programmer</td>
                                    <td>Deckow-Pouros</td>
                                    <td>Portugal</td>
                                    <td>4/27/2021</td>
                                    <td>Aquamarine</td>
                                </tr>
                                <tr>
                                    <th>15</th>
                                    <td>Moritz Dryburgh</td>
                                    <td>Dental Hygienist</td>
                                    <td>Schiller, Cole and Hackett</td>
                                    <td>Sri Lanka</td>
                                    <td>8/8/2020</td>
                                    <td>Crimson</td>
                                </tr>
                                <tr>
                                    <th>16</th>
                                    <td>Reid Semiras</td>
                                    <td>Teacher</td>
                                    <td>Sporer, Sipes and Rogahn</td>
                                    <td>Poland</td>
                                    <td>7/30/2020</td>
                                    <td>Green</td>
                                </tr>
                                <tr>
                                    <th>17</th>
                                    <td>Alec Lethby</td>
                                    <td>Teacher</td>
                                    <td>Reichel, Glover and Hamill</td>
                                    <td>China</td>
                                    <td>2/28/2021</td>
                                    <td>Khaki</td>
                                </tr>
                                <tr>
                                    <th>18</th>
                                    <td>Aland Wilber</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Kshlerin, Rogahn and Swaniawski</td>
                                    <td>Czech Republic</td>
                                    <td>9/29/2020</td>
                                    <td>Purple</td>
                                </tr>
                                <tr>
                                    <th>19</th>
                                    <td>Teddie Duerden</td>
                                    <td>Staff Accountant III</td>
                                    <td>Pouros, Ullrich and Windler</td>
                                    <td>France</td>
                                    <td>10/27/2020</td>
                                    <td>Aquamarine</td>
                                </tr>
                                <tr>
                                    <th>20</th>
                                    <td>Lorelei Blackstone</td>
                                    <td>Data Coordiator</td>
                                    <td>Witting, Kutch and Greenfelder</td>
                                    <td>Kazakhstan</td>
                                    <td>6/3/2020</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="dock bg-neutral text-neutral-content">
                <button className="dock-active">
                    <svg
                        className="size-[1.2em]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            fill="currentColor"
                            strokeLinejoin="miter"
                            strokeLinecap="butt"
                        >
                            <polyline
                                points="1 11 12 2 23 11"
                                fill="none"
                                stroke="currentColor"
                                stroke-miterlimit="10"
                                strokeWidth="2"
                            ></polyline>
                            <path
                                d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                stroke-miterlimit="10"
                                strokeWidth="2"
                            ></path>
                            <line
                                x1="12"
                                y1="22"
                                x2="12"
                                y2="18"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                stroke-miterlimit="10"
                                strokeWidth="2"
                            ></line>
                        </g>
                    </svg>
                    <span className="dock-label">Home</span>
                </button>

                <button className="">
                    <svg
                        className="size-[1.2em]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            fill="currentColor"
                            strokeLinejoin="miter"
                            strokeLinecap="butt"
                        >
                            <polyline
                                points="3 14 9 14 9 17 15 17 15 14 21 14"
                                fill="none"
                                stroke="currentColor"
                                stroke-miterlimit="10"
                                strokeWidth="2"
                            ></polyline>
                            <rect
                                x="3"
                                y="3"
                                width="18"
                                height="18"
                                rx="2"
                                ry="2"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                stroke-miterlimit="10"
                                strokeWidth="2"
                            ></rect>
                        </g>
                    </svg>
                    <span className="dock-label">Setup</span>
                </button>

                <button>
                    <svg
                        className="size-[1.2em]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            fill="currentColor"
                            strokeLinejoin="miter"
                            strokeLinecap="butt"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="3"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                stroke-miterlimit="10"
                                strokeWidth="2"
                            ></circle>
                            <path
                                d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                stroke-miterlimit="10"
                                strokeWidth="2"
                            ></path>
                        </g>
                    </svg>
                    <span className="dock-label">Play</span>
                </button>
            </div>
        </div>
    );
}

export default App;
