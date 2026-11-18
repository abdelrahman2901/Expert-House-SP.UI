import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { environment } from '../../environments/environment';
import { site } from './site';

export function applySeo(): void {
  const title = inject(Title);
  const meta = inject(Meta);
  const document = inject(DOCUMENT);
  const platformId = inject(PLATFORM_ID);

  title.setTitle(site.title);
  meta.updateTag({ name: 'description', content: site.description });
  meta.updateTag({ property: 'og:title', content: site.title });
  meta.updateTag({ property: 'og:description', content: site.description });
  meta.updateTag({ name: 'twitter:title', content: site.title });
  meta.updateTag({ name: 'twitter:description', content: site.description });

  const configured = environment.siteUrl.trim().replace(/\/$/, '');
  const origin = configured || (isPlatformBrowser(platformId) ? window.location.origin : '');
  if (!origin) {
    return;
  }

  const pageUrl = `${origin}/`;
  const image = `${origin}${site.imagePath}`;
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (canonical) {
    canonical.href = pageUrl;
  }

  meta.updateTag({ property: 'og:url', content: pageUrl });
  meta.updateTag({ property: 'og:image', content: image });
  meta.updateTag({ property: 'og:image:alt', content: 'Expert House SP — When Innovation Matters' });
  meta.updateTag({ name: 'twitter:image', content: image });

  const structuredData = document.getElementById('seo-jsonld');
  if (structuredData) {
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: site.name,
      url: pageUrl,
      image,
      logo: `${origin}${site.logoPath}`,
      description: site.description,
      email: site.email,
      telephone: site.telephone,
      slogan: 'When Innovation Matters',
      foundingDate: '2003',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cairo',
        addressCountry: 'EG',
      },
      sameAs: [site.linkedin],
      knowsAbout: [
        'ERP implementation',
        'Project management',
        'Business process automation',
      ],
    });
  }
}
