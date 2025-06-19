import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import myProjects from './ProjectsData';
import { useTranslation } from 'react-i18next';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation('main');
  const project = myProjects[parseInt(id, 10)];

  if (!project) {
    return <div style={{ padding: 32 }}>Project not found.</div>;
  }

  // Check if this is the portfolio project by key
  const isPortfolio = project.projectTitle === 'portfolio_project_title';

  let localizedFeatures = null;
  if (Array.isArray(project.features) && project.features.length === 1 && typeof project.features[0] === 'string' && project.features[0].endsWith('_features')) {
    const tFeatures = t(project.features[0], { returnObjects: true });
    if (Array.isArray(tFeatures)) {
      localizedFeatures = tFeatures;
    }
  }

  return (
    <div style={{ maxWidth: 800, margin: '40px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(36,99,235,0.08)', padding: 32 }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: 24, background: 'var(--blue)', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', cursor: 'pointer' }}>← Back to Projects</button>
      <h1 style={{ color: '#2563eb', marginBottom: 12 }}>{t(project.projectTitle)}</h1>
      <h3 style={{ color: '#555', marginBottom: 18 }}>{t(project.projectSubtitle)}</h3>
      <p className="project-description" style={{ color: '#555', fontSize: '1.08rem', margin: '0 0 18px 0', minHeight: 40 }}>{t(project.description)}</p>
      <img src={project.imgPath} alt={t(project.projectTitle)} style={{ width: '100%', maxWidth: 650, borderRadius: 8, marginBottom: 24 }} />
      <div style={{ marginBottom: 18 }}>
        <strong>{t('technologies_title') || 'Technologies:'}</strong>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '8px 0', padding: 0, listStyle: 'none' }}>
          {project.technologies && project.technologies.map((tech, i) => (
            <li key={i} style={{ background: '#eef2ff', color: '#2563eb', borderRadius: 16, padding: '4px 14px', fontSize: '0.95rem' }}>{tech}</li>
          ))}
        </ul>
      </div>
      {project.features && project.features.length > 0 && (
        <div style={{ marginBottom: 18 }}>
          <strong>Features:</strong>
          <ul style={{ margin: '8px 0 0 18px' }}>
            {localizedFeatures
              ? localizedFeatures.map((feature, i) => <li key={i}>{feature}</li>)
              : project.features.map((feature, i) => <li key={i}>{feature}</li>)}
          </ul>
        </div>
      )}
      <div style={{ marginTop: 24, display: 'flex', gap: 16 }}>
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)', color: '#fff', borderRadius: 999, padding: '10px 22px', textDecoration: 'none', fontWeight: 500 }}>{t('live_demo') || 'Live Demo'}</a>
        )}
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ background: '#222', color: '#fff', borderRadius: 999, padding: '10px 22px', textDecoration: 'none', fontWeight: 500 }}>{t('github') || 'GitHub'}</a>
        )}
        {project.githubRepos && (
          <a href={project.githubRepos} target="_blank" rel="noopener noreferrer" style={{ background: '#555', color: '#fff', borderRadius: 999, padding: '10px 22px', textDecoration: 'none', fontWeight: 500 }}>Other Repos</a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails; 