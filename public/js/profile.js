/*const formLogout = document.querySelector('#formLogout')

if (formLogout instanceof HTMLFormElement) {
  formLogout.addEventListener('submit', async event => {
    event.preventDefault()

    const { status } = await fetch('/api/sessions', {
      method: 'DELETE'
    })

    if (status === 200) {
      window.location.href = '/login'
    } else {
      console.log('[logout] estado inesperado: ' + status)
    }

  })
}
*/
