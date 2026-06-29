import React from "react"

const skills = [
  { skill: "Python" },
  { skill: "SQL" },
  { skill: "ETL/ELT" },
  { skill: "Data Modeling" },
  { skill: "Apache Spark" },
  { skill: "Airflow" },
  { skill: "Kafka" },
  { skill: "PostgreSQL" },
  { skill: "Snowflake" },
  { skill: "BigQuery" },
  { skill: "AWS" },
  { skill: "Azure" },
  { skill: "Docker" },
  { skill: "Git" },
  { skill: "Power BI" },
  { skill: "Tableau" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Hemanth Veginati, and I am a{" "}
              <span className="font-bold">Data Engineer</span> based in Kansas.
            </p>
            <br />
            <p>
              My work focuses on designing scalable data pipelines, developing
              ETL/ELT workflows, and building reliable data platforms that power
              analytics and business intelligence. I enjoy transforming complex,
              high-volume data into clean, accessible datasets for data-driven
              decision-making.
            </p>
            <br />
            <p>
              I have experience working with SQL, Python, Apache Spark,
              Airflow, Kafka, cloud platforms such as AWS, Azure, and GCP, and
              modern data warehousing technologies. My projects have involved
              automating data workflows, optimizing database performance,
              integrating multiple data sources, and implementing scalable
              cloud-based data solutions.
            </p>
            <br />
            <p>
              I completed my Master&#39;s in Computer Science at the University
              of Central Missouri, and I am currently seeking{" "}
              <span className="font-bold text-teal-500">
                full-time Data Engineer opportunities
              </span>
              , including remote and relocation positions, where I can
              contribute to building robust, scalable data infrastructure.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
