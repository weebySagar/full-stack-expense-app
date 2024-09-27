import React from 'react';
import AppLayout from '@/layout/AppLayout';
import AuthLayout from '@/layout/AuthLayout';

export default function View({ view, layout, title }) {

    const layouts = {
        apps: AppLayout,
        auth: AuthLayout
    }
    if (title) document.title = title;
    const Layout = layout ? layouts[layout] : AppLayout;

    if (!view) return false;

    const ViewComponent = view;
    return (
        <Layout>
            <ViewComponent />
        </Layout>
    )
}
