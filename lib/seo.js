export const siteUrl = 'https://sceneset.ai'
export const siteName = 'SceneSet.AI'
export const defaultOgImage = '/commercial-assets/posters/pratt-4-29-5.jpg'

export function pageSeo({ title, description, path = '/', image = defaultOgImage }) {
  const url = `${siteUrl}${path}`

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 675,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
