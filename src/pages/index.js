import * as React from 'react';
import Layout from '../components/Layout';
import { header, btn } from '../styles/home.module.css';
import { Link } from 'gatsby';

export default function Home({ data }) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h3>Develop and deploy</h3>
          <p>Fullstack developer, Independent Consultant based out of Bangalore, India</p>
          <Link to="/projects" className={btn}>
            Projects
          </Link>
        </div>
        <img src="/computer.png" alt="banner image" style={{ maxWidth: '100%' }} />
      </section>
    </Layout>
  );
}
