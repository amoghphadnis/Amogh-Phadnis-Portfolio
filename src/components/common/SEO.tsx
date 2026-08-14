import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  pathname?: string;
  image?: string;
  type?: string;
}

const siteUrl = 'https://amoghphadnis.github.io/Amogh-Phadnis-Portfolio';
const defaultImage = `${siteUrl}/og-image.png`;

export function SEO({
  title,
  description,
  pathname = '',
  image = defaultImage,
  type = 'website',
}: SEOProps) {
  const url = `${siteUrl}/${pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Amogh Phadnis, Software Developer, Enterprise Applications, Manufacturing Systems, Workflow Automation, React, TypeScript, NestJS, Oracle"
      />
      <meta name="author" content="Amogh Anand Phadnis" />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Amogh Phadnis" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
}
