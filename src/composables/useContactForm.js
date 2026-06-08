import { ref } from 'vue'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export function useContactForm(source = 'Contact Page') {
  const isSubmitting = ref(false)
  const submitStatus = ref('idle')
  const submitMessage = ref('')

  const submitContactForm = async (form) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      submitStatus.value = 'error'
      submitMessage.value = 'Contact form is not configured yet. Please email us at info@qaconsultafrica.com.'
      return false
    }

    isSubmitting.value = true
    submitStatus.value = 'idle'
    submitMessage.value = ''

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: form.subject || `QA Consult Africa - ${source}`,
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          message: form.message,
          botcheck: ''
        })
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Unable to send your message.')
      }

      submitStatus.value = 'success'
      submitMessage.value = 'Thank you for your message! We will get back to you soon.'
      return true
    } catch (error) {
      submitStatus.value = 'error'
      submitMessage.value = error.message || 'Something went wrong. Please try again or email info@qaconsultafrica.com.'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  const resetStatus = () => {
    submitStatus.value = 'idle'
    submitMessage.value = ''
  }

  return {
    isSubmitting,
    submitStatus,
    submitMessage,
    submitContactForm,
    resetStatus
  }
}
