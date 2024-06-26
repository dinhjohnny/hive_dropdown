# Hive Frontend Engineer Challenge



## Functionality
- Created a drop-down component that allows users to select options, which are stored in React states for developer usage
- Users can open and close the drop-down menu
- Component supports single selected option or multiple selected options
- Component has 3 props label, options, and multi_select
  - label: small label for the component
  - options: array of desired choices
  - multi_select: true allows multi-selection, false specifies single selection
- Selected options are visible when the dropdown is closed
- Added subtle highlighting and outlining when interacting for a more friendly UX

## Getting Started
Make sure you have Node.js installed, if not check out this link: https://nodejs.org/en/download
1. Download the code as a ZIP folder and extract it to a folder
2. In an IDE such as VS Code, navigate to the downloaded folder and run "npm install" in the terminal
3. Afterwards, run "npm run dev" in the terminal

If you want to create your own component with your own data make sure to:
- pass in the appropriate props for label, options, and multi_select
- ex shown here "<Dropdown label={"Age"} options={age} multi_select={false}></Dropdown>"

