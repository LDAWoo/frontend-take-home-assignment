import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { FilterTodo } from '@/client/components/FilterTodo'
import { TodoList } from '@/client/components/TodoList'
import { STATUS_TODO } from '@/client/components/interfaces'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const initialState = STATUS_TODO.ALL

const Index = () => {
  const [status, setStatus] = useState<STATUS_TODO>(initialState)

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="pt-10">
          <FilterTodo defaultStatus={initialState} onStatusChange={setStatus} />
        </div>

        <div className="pt-10">
          <TodoList status={status} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
