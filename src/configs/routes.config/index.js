import React from 'react'
import authRoute from './authRoute'

import productsFields from '../pages.config/products.js'
import categoriesFields from 'configs/pages.config/categories'
import newsletterFields from 'configs/pages.config/newsletter'
import bannersFields from 'configs/pages.config/banners'
import warehousesFields from 'configs/pages.config/warehouses'
import paramsFields from 'configs/pages.config/parameters'
import countryFields from 'configs/pages.config/countries'
import cityFields from 'configs/pages.config/cities'
import manufacturersFields from 'configs/pages.config/manufacturers'
import brandsFields from 'configs/pages.config/brands'

export const publicRoutes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: React.lazy(() => import('views/Home')),
        authority: [],
    },
    {
        key: 'catalogue.products',
        path: '/products',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/products',
            pageType: 'table',
            title: 'Products',
            fields: productsFields,
        },
    },
    {
        key: 'catalogue.products.item',
        path: '/products/:id',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/products',
            pageType: 'form',
            title: 'New product',
            fields: productsFields,
        },
    },
    {
        key: 'catalogue.categories',
        path: '/categories',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/categories',
            pageType: 'table',
            title: 'Categories',
            fields: categoriesFields,
        },
    },
    {
        key: 'catalogue.categories.item',
        path: '/categories/:id',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/categories',
            pageType: 'form',
            title: 'New category',
            fields: categoriesFields,
        },
    },
    {
        key: 'site.newsletter',
        path: '/newsletter',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/newsletter',
            pageType: 'table',
            title: 'Newsletter',
            fields: newsletterFields,
        },
    },
    {
        key: 'site.banners',
        path: '/banners',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/banners',
            pageType: 'table',
            title: 'Banners',
            fields: bannersFields,
        },
    },
    {
        key: 'site.banners.item',
        path: '/banners/:id',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/banners',
            pageType: 'form',
            title: 'New banner',
            fields: bannersFields,
        },
    },
    {
        key: 'settings.warehouses',
        path: '/warehouses',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/warehouses',
            pageType: 'table',
            title: 'Warehouses',
            fields: warehousesFields,
        },
    },
    {
        key: 'settings.warehouses.item',
        path: '/warehouses/:id',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/warehouses',
            pageType: 'form',
            title: 'New warehouse',
            fields: warehousesFields,
        },
    },
    {
        key: 'settings.parameters',
        path: '/parameters',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/parameters',
            pageType: 'table',
            title: 'Parameters',
            fields: paramsFields,
        },
    },
    {
        key: 'settings.parameters.item',
        path: '/parameters/:id',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/parameters',
            pageType: 'form',
            title: 'New parameter',
            fields: paramsFields,
        },
    },
    {
        key: 'settings.countries',
        path: '/countries',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/countries',
            pageType: 'table',
            title: 'Countries',
            fields: countryFields,
        },
    },
    {
        key: 'settings.cities',
        path: '/cities',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/cities',
            pageType: 'table',
            title: 'Cities',
            fields: cityFields,
        },
    },
    {
        key: 'settings.cities.item',
        path: '/cities/:id',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/cities',
            pageType: 'form',
            title: 'New city',
            fields: cityFields,
        },
    },
    {
        key: 'settings.manufacturers',
        path: '/manufacturers',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/manufacturers',
            pageType: 'table',
            title: 'Manufacturers',
            fields: manufacturersFields,
        },
    },
    {
        key: 'settings.manufacturers.item',
        path: '/manufacturers/:id',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/manufacturers/:id',
            pageType: 'form',
            title: 'New manufacturer',
            fields: manufacturersFields,
        },
    },
    {
        key: 'settings.brands',
        path: '/brands',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/brands',
            pageType: 'table',
            title: 'Brands',
            fields: brandsFields,
        },
    },
    {
        key: 'settings.brands.item',
        path: '/brands/:id',
        component: React.lazy(() => import('views/Default')),
        authority: [],
        props: {
            apiPath: '/brands',
            pageType: 'form',
            title: 'New brand',
            fields: brandsFields,
        },
    },
]
