import React from 'react'
import { folderTree } from '../folder/folder-tree'
import { findPath } from '../folder/tree-util'
import { useTerminalState, useTerminalDispatch } from '../terminal-context'

export default function DirectoryBrowser() {
  const { cwdId } = useTerminalState()
  const dispatch = useTerminalDispatch()

  const breadcrumb = findPath(folderTree, cwdId) || [folderTree]
  const currentNode =
    breadcrumb[breadcrumb.length - 1].children.length > 0
      ? breadcrumb[breadcrumb.length - 1]
      : breadcrumb[breadcrumb.length - 2] || breadcrumb[0]

  const changeDir = (newId) => {
    const fullCrumbs = findPath(folderTree, newId) || [folderTree]
    const fullPath = `hearthdev@hearthdev:~/${fullCrumbs
      .map((n) => n.name)
      .join('/')}`

    dispatch({
      type: 'SET_CWD',
      payload: { id: newId, path: fullPath },
    })
  }

  return (
    <div className='p-5 min-h-[20vh]'>
      <nav className='flex items-center space-x-2 mb-4'>
        {breadcrumb.map((node, idx) => (
          <button
            key={node.id}
            onClick={() => changeDir(node.id)}
            className='hover:underline focus:outline-none'
          >
            {node.name}
            {idx < breadcrumb.length - 1 && <span>/</span>}
          </button>
        ))}
      </nav>

      <ul className='pl-4 space-y-2'>
        {currentNode.children.length > 0 ? (
          currentNode.children.map((child) => (
            <li key={child.id}>
              <button
                onClick={() => changeDir(child.id)}
                className='flex items-center space-x-2 hover:text-blue-600 focus:outline-none'
              >
                <FolderIcon />
                <span className='text-xl font-medium'>{child.name}</span>
              </button>
            </li>
          ))
        ) : (
          <li className='italic text-gray-500'>No sub-folders</li>
        )}
      </ul>
    </div>
  )
}

function FolderIcon() {
  return (
    <svg
      className='w-6 h-6'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 24 24'
    >
      <path d='M3 6a2 2 0 012-2h5l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6z' />
    </svg>
  )
}
