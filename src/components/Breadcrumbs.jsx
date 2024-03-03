import React from 'react'

export default function Breadcrumbs() {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about', active: true },
      ];
  return (
    <div>
         <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className="flex text-lg md:text-xl">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active ? 'page' : undefined}
            className={`${
              breadcrumb.active ? 'text-white' : 'text-gray-500'
            } text-sm md:text-lg`}
          >
            <a href={breadcrumb.href}>{breadcrumb.label}</a>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
    </div>
  )
}
