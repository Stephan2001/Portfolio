# Terminal Browser Portfolio

A dynamic, tree-based directory for your terminal Portfolio Project.

## Features

- **Dynamic Folder Tree**: Easily define your folder structure in a single JSON file.
- **Breadcrumb Navigation**: Shows the current path and allows users to navigate back up the tree.
- **State Management Integration**: Hooks into a global context (e.g., terminal state) to keep track of the current working directory.
- **Scalable**: Add or modify folders in `/folders.js`—no additional code changes required.
- **Accessible**: Keyboard support and UI components for your directory.

## Project Structure

```
├── data/
│   └── folders.js       # JSON tree defining folder hierarchy
├── utils/
│   └── findPath.js      # Utility to locate a node path in the tree
├── components/
│   └── DirectoryBrowser.jsx  # Main component
├── context/
│   └── terminalContext.js   # Global state (cwd, user, history, etc.)
└── README.md            # This file
```

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/stephan2001/your-repo.git
   cd your-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

Wrap your app in the `TerminalProvider` to provide global state, then render `DirectoryBrowser`:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { TerminalProvider } from './context/terminalContext'
import DirectoryBrowser from './components/DirectoryBrowser'

ReactDOM.render(
  <TerminalProvider>
    <DirectoryBrowser />
  </TerminalProvider>,
  document.getElementById('root')
)
```

### Defining Folders

Edit `data/folders.js`:

```js
export const folderTree = {
  id: 'home',
  name: 'Home',
  children: [
    {
      id: 'portfolio',
      name: 'Portfolio',
      children: [
        /* ... */
      ],
    },
    // Add more top-level folders here
  ],
}
```

## To do list

- [X] Fix terminal history
- [ ] Add more pages for projects
- [X] Add default screen
- [ ] Implement more terminal functions
- [ ] Fix UI inconsistancies for screen sizes (+mobile)
- [ ] Do an actual readme :(

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/fooBar`).
3. Commit your changes (`git commit -am 'Add some fooBar'`).
4. Push to the branch (`git push origin feature/fooBar`).
5. Create a new Pull Request.

## License

MIT © Stephan Moolman
