import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { STATUS_TODO } from './interfaces'

interface ItemProps {
  id: number
  title: string
  status: STATUS_TODO
}

const items: ItemProps[] = [
  {
    id: 1,
    title: 'All',
    status: STATUS_TODO.ALL,
  },
  {
    id: 2,
    title: 'Pending',
    status: STATUS_TODO.PENDING,
  },
  {
    id: 3,
    title: 'Completed',
    status: STATUS_TODO.COMPLETED,
  },
]

type FilterTodoProps = {
  defaultStatus: STATUS_TODO
  onStatusChange: (status: STATUS_TODO) => void
}

export const FilterTodo: React.FC<FilterTodoProps> = ({
  defaultStatus,
  onStatusChange,
}) => {
  return (
    <Tabs.Root
      defaultValue={defaultStatus}
      onValueChange={(value) => onStatusChange(value as STATUS_TODO)}
    >
      <Tabs.List className="flex flex-row gap-2">
        {items.map((item) => (
          <Tabs.Trigger
            key={item.id}
            value={item.status}
            className="data-[state=inactive]:bg-transparent rounded-full px-6 py-3 text-sm font-bold  data-[state=inactive]:border data-[state=inactive]:border-[var(--border)] data-[state=active]:bg-[var(--primary-background)] data-[state=active]:text-[var(--primary-foreground)] data-[state=inactive]:text-[var(--secondary-foreground)]"
          >
            {item.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}
