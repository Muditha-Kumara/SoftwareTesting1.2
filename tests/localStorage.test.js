/**
 * @jest-environment jsdom
 */

const {
  saveTasksToLocalStorage,
  retrieveTasksFromLocalStorage,
  archiveCompleted,
  taskList,
  importantTaskList,
  historyList
} = require('../script.js');

describe('LocalStorage Functions', () => {
  beforeEach(() => {
    // Clear arrays manually
    taskList.length = 0;
    importantTaskList.length = 0;
    historyList.length = 0;
    
    // Spy on localStorage methods
    jest.spyOn(Storage.prototype, 'setItem');
    jest.spyOn(Storage.prototype, 'getItem');
  });

  describe('saveTasksToLocalStorage function', () => {
    test('should save all task arrays to localStorage', () => {
      // Arrange
      taskList.push({ text: 'Regular task', completed: false });
      importantTaskList.push({ text: 'Important task', completed: true });
      historyList.push({ text: 'Archived task', completed: true });
      
      // Act
      saveTasksToLocalStorage();
      
      // Assert
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'todoData', 
        JSON.stringify({
          tasks: taskList,
          important: importantTaskList,
          history: historyList
        })
      );
    });

    test('should handle empty arrays', () => {
      // Act
      saveTasksToLocalStorage();
      
      // Assert
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'todoData',
        JSON.stringify({
          tasks: [],
          important: [],
          history: []
        })
      );
    });
  });

  describe('retrieveTasksFromLocalStorage function', () => {
    test('should load tasks from localStorage when data exists', () => {
      // Arrange
      const mockData = {
        tasks: [{ text: 'Loaded task', completed: false }],
        important: [{ text: 'Loaded important', completed: true }],
        history: [{ text: 'Loaded history', completed: true }]
      };
      localStorage.getItem.mockReturnValue(JSON.stringify(mockData));
      
      // Act
      retrieveTasksFromLocalStorage();
      
      // Assert
      expect(localStorage.getItem).toHaveBeenCalledWith('todoData');
      expect(taskList).toEqual(mockData.tasks);
      expect(importantTaskList).toEqual(mockData.important);
      expect(historyList).toEqual(mockData.history);
    });

    test('should handle missing localStorage data', () => {
      // Arrange
      localStorage.getItem.mockReturnValue(null);
      
      // Act
      retrieveTasksFromLocalStorage();
      
      // Assert
      expect(localStorage.getItem).toHaveBeenCalledWith('todoData');
      expect(taskList).toEqual([]);
      expect(importantTaskList).toEqual([]);
      expect(historyList).toEqual([]);
    });

    test('should handle corrupted JSON data gracefully (BUG004)', () => {
      // Arrange
      localStorage.getItem.mockReturnValue('invalid json data');
      console.warn = jest.fn(); // Mock console.warn
      
      // Act
      retrieveTasksFromLocalStorage();
      
      // Assert
      expect(console.warn).toHaveBeenCalledWith('Data in localStorage is invalid JSON');
      expect(taskList).toEqual([]);
      expect(importantTaskList).toEqual([]);
      expect(historyList).toEqual([]);
    });

    test('should handle partial data in localStorage', () => {
      // Arrange
      const partialData = {
        tasks: [{ text: 'Regular task', completed: false }]
        // missing important and history
      };
      localStorage.getItem.mockReturnValue(JSON.stringify(partialData));
      
      // Act
      retrieveTasksFromLocalStorage();
      
      // Assert
      expect(taskList).toEqual(partialData.tasks);
      expect(importantTaskList).toEqual([]); // Should default to empty array
      expect(historyList).toEqual([]); // Should default to empty array
    });
  });

  describe('archiveCompleted function', () => {
    test('should move completed tasks to history', () => {
      // Arrange
      taskList.push({ text: 'Incomplete task', completed: false });
      taskList.push({ text: 'Complete task 1', completed: true });
      taskList.push({ text: 'Complete task 2', completed: true });
      
      // Act
      archiveCompleted();
      
      // Assert
      expect(historyList.length).toBe(2);
      expect(historyList[0].text).toBe('Complete task 1');
      expect(historyList[1].text).toBe('Complete task 2');
    });

    test('should remove completed tasks from taskList', () => {
      // Arrange
      taskList.push({ text: 'Incomplete task', completed: false });
      taskList.push({ text: 'Complete task 1', completed: true });
      taskList.push({ text: 'Complete task 2', completed: true });
      
      // Act
      archiveCompleted();
      
      // Assert
      expect(taskList.length).toBe(1);
      expect(taskList[0].text).toBe('Incomplete task');
      expect(taskList[0].completed).toBe(false);
    });

    test('should handle case with no completed tasks', () => {
      // Arrange - all tasks incomplete
      taskList.push({ text: 'Incomplete 1', completed: false });
      taskList.push({ text: 'Incomplete 2', completed: false });
      
      // Act
      archiveCompleted();
      
      // Assert
      expect(historyList.length).toBe(0);
      expect(taskList.length).toBe(2);
    });
  });
});
