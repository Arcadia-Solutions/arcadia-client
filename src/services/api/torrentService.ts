import api from './api.ts'

export const getTitleGroup = async (id: string | Number) => {
  try {
    return (await api.get('/title-group?id=' + id)).data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}
export const getTitleGroupLite = async (id: string | Number) => {
  try {
    return (await api.get('/title-group/lite?id=' + id)).data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}
export const createTitleGroup = async (titleGroup: object) => {
  try {
    return (await api.post('/title-group', titleGroup)).data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}
export const createEditionGroup = async (editionGroup: object) => {
  try {
    return (await api.post('/edition-group', editionGroup)).data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}
export const uploadTorrent = async (torrentForm: object) => {
  try {
    const formData = new FormData()
    for (const [key, value] of Object.entries(torrentForm)) {
      if (value != null) {
        formData.append(key, value)
      }
    }
    return (
      await api.post('/torrent', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    ).data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}
