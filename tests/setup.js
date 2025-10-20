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

// Setup localStorage mock before loading script
const mockLocalStorage = createLocalStorageMock();
global.localStorage = mockLocalStorage;
window.localStorage = mockLocalStorage;

// Load the script after DOM and localStorage setup
require('../script.js');

beforeEach(() => {
  // Clear and reset all mock calls
  jest.clearAllMocks();
  
  // Reset alert mock
  global.alert = jest.fn();

  // Reset arrays by clearing them (not reassigning)
  while (global.taskList.length > 0) {
    global.taskList.pop();
  }
  while (global.importantTaskList.length > 0) {
    global.importantTaskList.pop();
  }
  while (global.historyList.length > 0) {
    global.historyList.pop();
  }
  
  // Clear input fields
  document.getElementById('taskInput').value = '';
  document.getElementById('importantTaskInput').value = '';
  
  // Clear DOM lists
  document.getElementById('taskList').innerHTML = '';
  document.getElementById('importantTaskList').innerHTML = '';
  document.getElementById('archiveList').innerHTML = '';
});
