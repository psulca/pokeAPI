import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function Root() {
  return (
    <main className="max-w-screen-lg m-auto grid min-h-screen grid-rows-[130px,1fr] gap-4">
      <Header />
      <Outlet />
    </main>
  )
}