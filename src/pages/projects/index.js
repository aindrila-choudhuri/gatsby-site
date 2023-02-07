import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import { portfolio, projects as projectStyles } from '../../styles/projects.module.css';

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects and Websites I have created</h3>
      </div>
      <div className={projectStyles}>
        {projects.map((project) => (
          <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          date
        }
      }
    }
  }
`;
