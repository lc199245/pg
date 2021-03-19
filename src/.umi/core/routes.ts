// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/changliu/Documents/pg/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'/Users/changliu/Documents/pg/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'/Users/changliu/Documents/pg/src/layouts/UserLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/user/login",
            "name": "login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__User__login' */'/Users/changliu/Documents/pg/src/pages/User/login'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/user",
            "redirect": "/user/login",
            "exact": true
          },
          {
            "name": "register-result",
            "icon": "smile",
            "path": "/user/register-result",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register-result' */'/Users/changliu/Documents/pg/src/pages/user/register-result'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register",
            "icon": "smile",
            "path": "/user/register",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register' */'/Users/changliu/Documents/pg/src/pages/user/register'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/changliu/Documents/pg/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/Users/changliu/Documents/pg/src/layouts/BasicLayout'), loading: LoadingComponent}),
        "Routes": [
          "src/pages/Authorized"
        ],
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "path": "/",
            "redirect": "/dashboard/analysis",
            "exact": true
          },
          {
            "path": "/dashboard",
            "name": "dashboard",
            "icon": "dashboard",
            "routes": [
              {
                "path": "/",
                "redirect": "/dashboard/analysis",
                "exact": true
              },
              {
                "name": "analysis",
                "icon": "smile",
                "path": "/dashboard/analysis",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__analysis' */'/Users/changliu/Documents/pg/src/pages/dashboard/analysis'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/list",
            "icon": "desktop",
            "name": "workplace",
            "routes": [
              {
                "path": "/",
                "redirect": "/list/table-list",
                "exact": true
              },
              {
                "name": "pending",
                "icon": "smile",
                "path": "/list/table-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__table-list' */'/Users/changliu/Documents/pg/src/pages/list/table-list'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "processed",
                "icon": "smile",
                "path": "/list/processed-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__table-list' */'/Users/changliu/Documents/pg/src/pages/list/table-list'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "completed",
                "icon": "smile",
                "path": "/list/completed-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__table-list' */'/Users/changliu/Documents/pg/src/pages/list/table-list'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "skipped",
                "icon": "smile",
                "path": "/list/skipped-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__table-list' */'/Users/changliu/Documents/pg/src/pages/list/table-list'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "name": "account",
            "icon": "user",
            "path": "/account",
            "routes": [
              {
                "path": "/",
                "redirect": "/account/center",
                "exact": true
              },
              {
                "name": "center",
                "icon": "smile",
                "path": "/account/center",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__center' */'/Users/changliu/Documents/pg/src/pages/account/center'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "settings",
                "icon": "smile",
                "path": "/account/settings",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__settings' */'/Users/changliu/Documents/pg/src/pages/account/settings'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/changliu/Documents/pg/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
