import { profile } from '../../data/profile';

export function PersonJsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    url: 'https://amoghphadnis.github.io/Amogh-Phadnis-Portfolio/',
    sameAs: [profile.linkedInUrl, profile.githubUrl],
    worksFor: {
      '@type': 'Organization',
      name: 'Godavari Biorefineries Ltd.',
    },
    knowsAbout: [
      'Enterprise Application Development',
      'Workflow Automation',
      'Manufacturing Systems',
      'Real-Time Dashboards',
      'Computer Vision',
    ],
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(json)}
    </script>
  );
}

export function WebsiteJsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Amogh Phadnis',
    url: 'https://amoghphadnis.github.io/Amogh-Phadnis-Portfolio/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://amoghphadnis.github.io/Amogh-Phadnis-Portfolio/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(json)}
    </script>
  );
}
