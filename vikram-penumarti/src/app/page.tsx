'use client'

import '@/styles/globals.css'
import { Homebar, Socials } from '@/lib/components'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="text-white font-serif h-screen overflow-y-auto pb-40">
      {/* <Homebar /> */}
      <ImageAndTitle />
      <AboutMe />
      <Work />
      <Clubs />
      <Hackathons />
      <PersonalProjects />
      <Coursework />
      <BoyScouts />
      <Socials />
    </div>
  );
}

function ImageAndTitle() {
  return (
    <div>
      <div className="flex pl-10 pb-5 pt-20">
        <Image src="/portrait.jpg" alt="Vikram Penumarti" width="300" height="300"/>
        <div className="flex-1 text-center pr-80 place-self-center">
          <p className="text-5xl">Hi, I'm Vikram.</p>
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div>
      <p className="text-orange-200 text-5xl text-center">⎯⎯ About Me ⎯⎯</p>
      <p className="text-xl px-10 py-2">I am currently a sophomore computer science and engineering student a UC Davis. Some of my hobbies are playing soccer, video games, hanging out with friends, and most of all, coding! In my sophomore year of high school, I took the class “Intro to Java”, and I fell in love with programming for the first time. Ever since then, I have not been able to leave the keyboard alone. As high school drew to a close, I knew exactly what I wanted to pursue in college, and for my career. College is where my passion for computer science really flourished though. I started to do many personal projects link here, and learned several new frameworks and languages simply because it is what I love doing. A lot of my day is consumed by computers, since my coursework is predominantly computer science related, my on-campus job deals with software infrastructure, I am in two programming clubs on campus, and outside of all of this, I regularly participate in hackathons and start passion projects. This website is a passion project, my attempt to learn Next.js!
</p>
    </div>
  );
}

function Work() {
  return (
    <div>
      <p className="text-orange-200 text-5xl text-center">⎯⎯ Work ⎯⎯</p>
      <Weimerlab />
      <ICAM />
    </div>
  );
}

function Weimerlab() {
  return (
    <div>
      <p className="px-10 text-2xl font-bold ">Weimer MicroLab | Software Infrastructure Assistant</p>
      <p className="px-10 text-lg pt-1 italic ">October 2023 – Present</p>
      <p className="text-xl px-10 py-2">I currently work at Weimer Microlab in conjunction with Dr. Bart Weimer from the Veternary Medicine Lab, and graduate/postdoc students doing research with him. For my first quarter of work, I spent the the time setting up a high performance computing cluster to be used by lab members to perform analyses and other jobs with DNA sequencing data. I used the following technologies to setup the cluster: SLURM, munge, Python, LDAP, NFS, Dumb switch/ethernet, and chrony. This experience with the cluster was very different from most of the work I had been doing with personal projects and coursework up until this point, since I dealed a lot with the Linux operating system, at a much closer level than I ever had been. This process had fundamentally been different than any pure programming experience, since it taught me a lot about debugging, computer hardware, and operating systems through hours of squashing bugs relating to compatibility with software and hardware, as well as the setup of complex systems which were listed above. Overall, this job has so far been a very enriching experience as I have learned a lot about a completely different branch of computer science than I am used to.</p>
    </div>
  );
}

function ICAM() {
  return (
    <div>
      <p className="px-10 text-2xl font-bold ">Institute for Complex Adaptive Matter | Website Manager</p>
      <p className="px-10 text-lg pt-1 italic ">May 2023 – Present</p>
      <p></p>
    </div>
  );
}

function Clubs() {
  return (
    <div>
      <p className="text-orange-200 text-5xl text-center">⎯⎯ Clubs ⎯⎯</p>
      <AggieSportsAnalytics />
      <Codelab />
    </div>
  );
}

function Hackathons() {
  return (
    <div>
      <p className="text-orange-200 text-5xl text-center">⎯⎯ Hackathons ⎯⎯</p>
      <ClimbGUI />
    </div>
  );
}

function PersonalProjects() {
  return (
    <div>
      <p className="text-orange-200 text-5xl text-center">⎯⎯ Personal Projects ⎯⎯</p>
      <SchedMe />
    </div>
  );
}

function Coursework() {
  return (
    <div>
      <p className="text-orange-200 text-5xl text-center">⎯⎯ Coursework ⎯⎯</p>
      <TrafficInvaders />
    </div>
  );
}

function BoyScouts() {
  return (
    <div>
      <p className="text-orange-200 text-5xl text-center">⎯⎯ Boy Scouts ⎯⎯</p>
      <EagleProject />
      <SPL />
      <Philmont />
    </div>
  );
}

function EagleProject() {
  return (
    <div>
      <p className="px-10 text-2xl font-bold ">Eagle Project</p>
      <p className="px-10 text-lg pt-1 italic ">August 2021</p>
      <ul className="list-disc px-14 pt-1 text-xl">
        <li>As a part of my journey to achieve the Eagle rank in the Boy Scouts of America, I had to complete something called an Eagle Project.</li>
        <li>An Eagle Project can be anything that significantly benefits the community, and it must be large enough to require significant leadership.</li>
        <li>The project I chose was to refurbish the garden risers in the Cherry Chase Elementary School Garden.</li>
        <li>This project was significant, because the garden risers in the Cherry Chase Garden were not only very dull and bland compared to the rest of the garden, but they were also a safety hazard.</li>
        <li>Every single student in the school eventually does sit on those risers as part of a class or activity, so I decided this would be a good opportunity for a project.</li>
        <li>
          <span>My Eagle Project took</span> 
          <span className="text-blue-400"> 200+ hours </span>
          <span> total in planning, coordination, and execution.</span>
        </li>
        <li>
          <span>I had</span>
          <span className="text-blue-400"> 15+ volunteers </span>
          <span>participate in my project, with me leading, teaching, and working with scouts and adults alike to complete this project.</span>
        </li>
      </ul>
      <div className="flex justify-center items-center w-full">
        <Image className="pr-10 py-5" src="/Risers_Before.png" alt="Garden Risers Before" height="600" width="600"/>
        <Image src="/Risers_After.png" alt="Garden Risers After" height="600" width="600"/>
      </div>
    </div>
  );
}

function SPL() {
  return (
    <div>
      <p className="px-10 text-2xl font-bold ">Senior Patrol Leader</p>
      <p className="px-10 text-lg pt-1 italic ">January 2021 – August 2021</p>
      <ul className="list-disc px-14 pt-1 text-xl">
        <li>While I was in Boy Scouts, I decided to undertake the monumental task of leading the whole troop of Boy Scouts for one term (~6 months).</li>
        <li>
          <span>I organized meetings with the whole troop,</span>
          <span className="text-blue-400"> ~100 scouts </span>
          <span>, every other week.</span>
          </li>
        <li>I met with patrol leaders once a month (troop is split into groups, groups are called patrols) to discuss progress of scouts and resolve issues.</li>
        <li>I organized overnight campouts once a month, and make sure everything was running smoothly.</li>
        <li>
          <span>The most difficult task I did was taking about</span>
          <span className="text-blue-400"> 60 scouts </span>
          <span> to a week long summer camp called Chawanakee.</span>
          </li>
        <li>During Chawanakee, despite our troop being one of the largest in attendance, I made sure our campsite was the cleanest, and all issues scouts had were solved.</li>
        <li>At the end of the week, my troop had won multiple awards each day for having the cleanest campsites, and displaying amazing spirit and leadership throughout the week.</li>
      </ul>
      <div className="flex justify-center py-1">
        <Image alt="Chawanakee" src="/chawanakee.png" width="600" height="600"/>
      </div>
    </div>
  );
}

function Philmont() {
  return (
    <div>
      <p className="px-10 text-2xl font-bold ">Philmont</p>
      <p className="px-10 text-lg pt-1 italic ">August 2019 & August 2021</p>
      <ul className="list-disc px-14 pt-1 text-xl">
        <li>The pinnicle of my Boy Scouts experience was attending the 2 week long backpacking trip in New Mexico called Philmont.</li>
        <li>I went on Philmont two times, once as a crew leader in 2019, and once as a Chaplain's Aid in 2021.</li>
        <li>Both my experiences were very different, once as a leader, and once as a member.</li>
        <li>
          <span>The crew I managed was</span>
          <span className="text-blue-400"> 9 scouts </span>
          <span> and </span>
          <span className="text-blue-400">3 adults.</span>
        </li>
        <li>Overall though, I loved them both equally, since I could be in the pure wilderness, with my friends, simply hiking, eating, and talking.</li>
        <li>I loved the experience so much, because it was stress-free, no need to worry about homework or anything else.</li>
        <li>Along with the stress-free lifestyle, we got the chance to do activities such as bouldering, or black powder rifle shooting, and much more, which led to a very fun experience.</li>
        <li>Both times we faced a lot of challanges with burnout from hiking so much, homesickness, group conflicts, but in the end we enjoyed the experience, because it gave us a very different experience from what we're used to.</li>
        <li>This expeirence offered us a detox from the fast-paced life we're used to, full of dopamine and distractions.</li>
        <li>I saw the most beautiful nature ever, nebulas and stars in the sky, bears, snakes, and deer on the ground.</li>
        <li>No experience I have ever had can truly match the beauty and tranquility of when I went to Philmont.</li>
      </ul>
      <div className="flex justify-center items-center w-full">
        <Image className="pr-10 py-5" src="/philmont1.JPG" alt="My Philmont crew" height="600" width="600"/>
        <Image src="/philmont2.JPG" alt="Hiking during Philmont" height="600" width="600"/>
      </div>
    </div>
  );
}

function AggieSportsAnalytics() {
  return (
    <div>
      <p className="px-10 text-2xl font-bold ">Aggie Sports Analytics - Garde | Fullstack Developer</p>
      <p className="px-10 text-lg pt-1 italic ">October 2023 – Present</p>
      <ul className="list-disc px-14 pt-1 text-xl">
        <li>I am currently working on the flagship project for the UC Davis club Aggie Sports Analytics, Garde.</li>
        <li>We are working with the Davis Fencing Academy to build a automated fencing coach which can analyze the form of fencers and offer feedback for them if mistakes occur.</li>
        <li>
          <span>We are using computer vision with the </span>
          <span className="text-blue-400">tensorflow </span>
          <span>library to detect joint angles of the fencer and compare them to ideal joint angles.</span>
        </li>
        <li>
          <span>Once we determine the mistakes which occur, we feed this information into the</span>
          <span className="text-blue-400"> OpenAI API </span>
          <span>which can generate a response on how to improve their form, and where they went wrong.</span>
        </li>
        <li>
          <span>We are also using </span>
          <span className="text-blue-400">MongoDB </span>
          <span>to map the user's joint angles to the ideal angles, and provide appropriate feedback on how to improve thier form.</span>
        </li>
        <li>
          <span>We are coding this project using </span>
          <span className="text-blue-400">HTML, CSS, and Javascript.</span>
        </li>
        <li>I formulated the frontend for the project to contain two different options to select, a live feed or an uploaded video.</li>
        <li>I setup the MongoDB communication between the client and the server to allow for the comparison of angle values.</li>
        <li>I ensured the pausing, starting, stopping, and timing of the video along with a visual timer were are working in sync.</li>
      </ul>
      <div className="flex justify-center py-1">
        <Image alt="Small Garde demo" src="/fencing.gif" width="366" height="202"/>
      </div>
    </div>
  );
}

function Codelab() {
  return (
    <div className="py-5">
      <p className="px-10 text-2xl font-bold ">Codelab Davis - Course Visualization Tool | Fullstack Developer</p>
      <p className="px-10 text-lg pt-1 italic ">October 2023 – Present</p>
      <ul className="list-disc px-14 pt-1 text-xl">
        <li>I am currently working on the course visualization project for the UC Davis club Codelab.</li>
        <li>We are working with UC Davis faculty to create a tool UC Davis students can use to plan out there course schedule for the full four years, including prerequisites and university restrictions.</li>
        <li>
          <span>We are using</span>
          <span className="text-blue-400"> Next.js </span>
          <span>with </span>
          <span className="text-blue-400"> Typescript </span>
          <span> and </span>
          <span className="text-blue-400"> Tailwind CSS </span>
          <span> for the frontend, </span>
          <span className="text-blue-400"> Express.js </span>
          <span> for the backend, </span>
          <span>and </span>
          <span className="text-blue-400"> MongoDB </span>
          <span> for the database.</span>
        </li>
        <li>I worked on the backend CRUD routes and schema for the courses in the UC Davis catalog.</li>
        <li>I worked on creating a course lookup search bar, with recommendations, using a complete catalog of UC Davis courses in a CSV file.</li>
      </ul>
      <div className="flex justify-center items-center w-full">
        <Image className="pr-10 py-5" src="/course_example.png" alt="Example course" height="600" width="600"/>
        <Image src="/search_bar.gif" alt="Search bar" height="600" width="600"/>
      </div>
    </div>
  );
}

function ClimbGUI() {
  return (
    <div>
      <p className="px-10 text-2xl font-bold ">Climb GUI</p>
      <p className="px-10 text-lg pt-1 italic ">October 2023 – December 2023</p>
      <ul className="list-disc px-14 pt-1 text-xl">
        <li>During a hackathon my friend and I created Climb GUI, a tool to help climbers identify how to climb up bouldering problems.</li>
        <li>We accomplished this by using color segmentation to identify different routes.</li>
        <li>When the route is identified, we used breadth first search to find the ideal path from the start to finish.</li>
        <li>I programmed in entirety, the breadth first search algorithm to find the ideal path to the top.</li>
        <li>I coded the profile page as well as half of the color segmentation algorithm.</li>
        <li>
          <span>We used the framework</span>
          <span className="text-blue-400"> Reflex </span>
          <span> which is a relatively new fullstack framework using </span>
          <span className="text-blue-400">Python </span>
          <span>We used the library </span>
          <span className="text-blue-400">OpenCV </span>
          <span>for the color segmentation and coordinate calculations.</span>
        </li>
      </ul>
      <div className="flex justify-center py-1">
        <Image alt="Climb GUI demo" src="/ClimbGUI.gif" width="600" height="600"/>
      </div>
    </div>
  );
}

function SchedMe() {
  return (
    <div>
      <p className="px-10 text-2xl font-bold ">SchedMe</p>
      <p className="px-10 text-lg pt-1 italic ">February 2023 – Present</p>
      <ul className="list-disc px-14 pt-1 text-xl">
        <li>SchedMe is an app designed for students to plan their course and activity schedule, providing a central organization tool for all their courses and activities.</li>
        <li>I programmed the calendar, and the ability to add events to the calendar.</li>
        <li>I programmed the section which allows students to view and edit information about their courses in one area.</li>
        <li>
          <span>I used the </span>
          <span>Dart </span>
          <span>language with the </span>
          <span className="text-blue-500">Flutter </span>
          <span>framework.</span>
        </li>
      </ul>
      <div className="flex justify-center py-1">
        <Image alt="SchedMe demo" src="/SchedMe.gif" width="146" height="312"/>
      </div>
    </div>
  );
}

function TrafficInvaders() {
  return (
    <div>
      <p className="px-10 text-2xl font-bold ">Traffic Invaders</p>
      <p className="px-10 text-lg pt-1 italic ">March 2020 – June 2020</p>
      <ul className="list-disc px-14 pt-1 text-xl">
        <li>Traffic Invaders is a 2D infinitely downscrolling, traffic evading game that gets progressively more difficult as time passes.</li>
        <li>I programmed the different backgrounds of the game and the music.</li>
        <li>I coded the progressive difficulty increase of the game.</li>
        <li>
          <span>We used </span>
          <span className="text-blue-400">Java </span>
          <span>for this project, with the library </span>
          <span className="text-blue-400">Processing </span>
          <span>for graphics.</span>
        </li>
      </ul>
      <div className="flex justify-center py-1">
        <Image alt="Traffic Invaders demo" src="/Traffic_Invaders.gif" width="300" height="312"/>
      </div>
    </div>
  );
}