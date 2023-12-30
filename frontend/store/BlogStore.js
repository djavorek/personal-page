import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blogStore', async () => {
  const info = ref()
  const current = ref()
  const categories = ref([])
  const articles = ref([])

  articles.value = await queryContent('posts')
    .where({ draft: false })
    .find()
    .catch((e) => {
      error = 'Article fetching error: ' + e.message + e
    })

  async function fetchInfo () {
    try {
      categories.value = await queryContent('/category').fetch()
    } catch (e) {
      error = 'Initial Setup Error: ' + e.message + e
    }
  }

  return {
    info, current, categories, articles, fetchInfo
  }
})
