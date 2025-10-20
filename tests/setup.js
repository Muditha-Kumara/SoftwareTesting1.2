/**
 * @jest-environment jsdom
 */

// Mock localStorage
function createLocalStorageMock() {
  return {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
}
global.localStorage = createLocalStorageMock();

// Mock alert function
global.alert = jest.fn();

// Setup DOM
document.body.innerHTML = `
  <div class="container">
    <input type="text" id="taskInput" placeholder="Add a new regular task">
    <button onclick="addTask()">Add Task</button>
    <ul id="taskList"></ul>
    
    <input type="text" id="importantTaskInput" placeholder="Add an important task">
    <button onclick="addImportantTask()">Add Important Task</button>
    <ul id="importantTaskList"></ul>
    
    <ul id="archiveList"></ul>
  </div>
`;

// Load the script after DOM setup
require('../script.js');

beforeEach(() => {
  global.localStorage = createLocalStorageMock();
  global.alert = jest.fn();

  // Reset arrays
  global.taskList = [];
  global.importantTaskList = [];
  global.historyList = [];
});
