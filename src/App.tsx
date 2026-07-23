import { useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import { routes } from './router/routes'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [pathname])

  return null
}

function App() {
  const element = useRoutes(routes)

  return (
    <>
      <ScrollToTop />
      {element}
    </>
  )
}

export default App
