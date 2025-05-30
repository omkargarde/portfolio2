import type { RouteDefinition } from '@solidjs/router'
import { lazy } from 'solid-js'
import Home from './pages/home'

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '**',
    component: lazy(async () => import('./errors/404')),
  },
]
