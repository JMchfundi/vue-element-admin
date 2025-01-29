import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Boresha Maisha'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
