import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drrivascontrerasgastro.com'
  
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/dr-rivas-contreras`, lastModified: new Date() },
    { url: `${baseUrl}/servicios`, lastModified: new Date() },
    { url: `${baseUrl}/clinica`, lastModified: new Date() },
    { url: `${baseUrl}/contacto`, lastModified: new Date() },
  ]
}