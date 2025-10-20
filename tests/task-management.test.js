/**
 * @jest-environment jsdom
 */

const {
  addTask,
  toggleTask,
  deleteTask,
  saveTasksToLocalStorage,
  retrieveTasksFromLocalStorage,
  archiveCompleted,
  taskList
} = require('../script.js');

describe('Task Management Functions', () => {
  beforeEach(() => {
    // Reset DOM
    document.getElementById('taskInput').value = '';
    document.getElementById('taskList').innerHTML = '';
    
    // Reset taskList array
    global.taskList = [];
    
    // Re-mock localStorage methods to ensure they are jest.fn()
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    };
    global.localStorage = localStorageMock;
    window.localStorage = localStorageMock;
    localStorage = localStorageMock; // Ensure global reference
    global.alert = jest.fn();
  });

  describe('addTask function', () => {
    test('should add valid task to taskList', () => {
      // Arrange
      const initialLength = taskList.length;
      document.getElementById('taskInput').value = 'Test task';
      
      // Act
      addTask();
      
      // Assert
      expect(taskList.length).toBe(initialLength + 1);
      expect(taskList[taskList.length - 1].text).toBe('Test task');
      expect(taskList[taskList.length - 1].completed).toBe(false);
    });

    test('should show alert for empty task input', () => {
      // Arrange
      document.getElementById('taskInput').value = '';
      const initialLength = taskList.length;
      
      // Act
      addTask();
      
      // Assert
      expect(alert).toHaveBeenCalledWith('Please enter a task.');
      expect(taskList.length).toBe(initialLength);
    });

    test('should clear input field after adding task', () => {
      // Arrange
      const taskInput = document.getElementById('taskInput');
      taskInput.value = 'Test task';
      
      // Act
      addTask();
      
      // Assert
      expect(taskInput.value).toBe('');
    });

    test('should save to localStorage after adding task', () => {
      // Arrange
      document.getElementById('taskInput').value = 'Test task';
      // Act
      addTask();
      // Assert
      expect(window.localStorage.setItem).toHaveBeenCalled();
    });
  });

  describe('toggleTask function', () => {
    beforeEach(() => {
      // Setup test data
      taskList.push({ text: 'Test task', completed: false });
    });

    test('should toggle task completion status', () => {
      // Arrange
      const initialStatus = taskList[0].completed;
      
      // Act
      toggleTask(0);
      
      // Assert
      expect(taskList[0].completed).toBe(!initialStatus);
    });

    test('should save to localStorage after toggling', () => {
      // Arrange
      document.getElementById('taskInput').value = 'Test task';
      addTask();
      // Act
      toggleTask(0);
      // Assert
      expect(window.localStorage.setItem).toHaveBeenCalled();
    });
  });

  describe('deleteTask function', () => {
    beforeEach(() => {
      // Setup test data
      taskList.push({ text: 'Task 1', completed: false });
      taskList.push({ text: 'Task 2', completed: true });
    });

    test('should remove task from taskList', () => {
      // Arrange
      document.getElementById('taskInput').value = 'Task 1';
      addTask();
      document.getElementById('taskInput').value = 'Task 2';
      addTask();
      const initialLength = taskList.length;
      // Act
      deleteTask(0);
      // Assert
      expect(taskList.length).toBe(initialLength - 1);
      expect(taskList[0].text).toBe('Task 2');
    });
    test('should save to localStorage after deletion', () => {
      // Arrange
      document.getElementById('taskInput').value = 'Test task';
      addTask();
      // Act
      deleteTask(0);
      // Assert
      expect(window.localStorage.setItem).toHaveBeenCalled();
    });
  });
});
