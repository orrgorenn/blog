import React from 'react'
import type { ReactNode } from 'react'
import { Menu } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  href: string
  children: ReactNode
}

const DropdownMenuItem = ({ href, children }: Props) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={classNames(
            active ? 'bg-orange-200 dark:bg-zinc-700' : '',
            'block px-4 py-2 text-sm'
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  )
}

export default DropdownMenuItem
