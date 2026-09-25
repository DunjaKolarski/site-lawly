import "./ArticleResources.css";
import authorImage from "../../assets/profile2.png";

const resources = [
  {
    id: 1,
    title:
      "The 4 TMU School of Law Supplementary Questions: Ultimate Guide for Law School Applicants",
  },
  {
    id: 2,
    title:
      "Leveraging the CanMEDS Framework to Strengthen Your Medical School Application",
  },
  {
    id: 3,
    title:
      "Leveraging the CanMEDS Framework to Strengthen Your Medical School Application",
  },
  {
    id: 4,
    title:
      "Leveraging the CanMEDS Framework to Strengthen Your Medical School Application",
  },
];

function ArticleResources() {
  return (
    <section className="article-resources">
      <h4>Application Prep Resources</h4>
      <div className="article-resources-container">
        {resources.map((resource) => (
          <div className="article-resource-card" key={resource.id}>
            <img src={authorImage} alt="Cynthia L." />
            <div className="article-resource-content">
              <h4>{resource.title}</h4>
              <p>By: Cynthia L.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArticleResources;
