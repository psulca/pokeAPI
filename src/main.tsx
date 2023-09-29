import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'

import { PokemonList, PokemonDetail, Root } from './views'
import { listLoader, pokemonLoader } from './services/api'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} >
      <Route index loader={listLoader} element={
        <Suspense fallback={<div>Loading...</div>}>
          <PokemonList />
        </Suspense>} />
      <Route path="/pokemon/:name" loader={pokemonLoader} element={
        <Suspense fallback={<div>Loading...</div>}>
          <PokemonDetail />
        </Suspense>} />
    </Route >
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
