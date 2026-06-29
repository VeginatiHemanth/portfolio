import React from "react"
import SlideUp from "./SlideUp"

const projects = [
  {
    name: "Real-Time Sales Analytics Platform",
    description:
      "Designed and implemented a streaming data pipeline that ingested sales events from multiple sources, transformed them into trusted datasets, and delivered dashboards for business reporting and decision-making.",
    technologies: ["Python", "Kafka", "Spark", "Airflow", "Snowflake", "Power BI"],
  },
  {
    name: "Cloud Data Warehouse Modernization",
    description:
      "Migrated legacy reporting workflows into a modern cloud-based warehouse architecture with automated ETL/ELT pipelines, improved data quality checks, and scalable orchestration.",
    technologies: ["AWS", "Azure", "SQL", "ETL/ELT", "dbt", "Docker"],
  },
  {
    name: "Customer 360 Data Platform",
    description:
      "Built a unified customer data platform by integrating CRM, transaction, and support data into a consistent model for analytics, segmentation, and downstream reporting.",
    technologies: ["PostgreSQL", "Spark", "Data Modeling", "Airflow", "BigQuery", "Tableau"],
  },
  {
    name: "Operational Data Monitoring Pipeline",
    description:
      "Developed an automated monitoring and alerting solution for data freshness, data quality, and pipeline failures to ensure reliable and observable data operations.",
    technologies: ["Python", "Airflow", "SQL", "Docker", "CI/CD", "Monitoring"],
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Featured Work
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="h-full rounded-lg border border-neutral-200 p-6 shadow-sm animate-slideUpCubiBezier animation-delay-2 dark:border-stone-700">
                  <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
                  <p className="text-lg leading-7 mb-5 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="bg-gray-200 px-3 py-1 mr-2 mt-2 text-gray-500 rounded font-semibold text-sm"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
