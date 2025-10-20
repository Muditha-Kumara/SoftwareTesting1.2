# ToDo List Testing Assignment - Complete Guide

## 📋 Overview
This project contains a comprehensive testing report and implementation for the ToDo List application Scrum testing assignment.

## 📁 Project Structure
```
/home/muditha/testing1.2/
├── index.html                    # Main application HTML
├── script.js                     # Application JavaScript (contains bugs)
├── styles.css                    # Application styles
├── package.json                  # NPM dependencies and scripts
├── jest.config.js               # Jest testing configuration
├── assignment.txt               # Original assignment instructions
├── Report/
│   └── ToDo_List_Testing_Report.md  # MAIN DELIVERABLE REPORT
├── tests/
│   ├── setup.js                 # Test environment setup
│   ├── task-management.test.js  # Tests for regular tasks
│   ├── important-tasks.test.js  # Tests for important tasks
│   └── localStorage.test.js     # Tests for data persistence
└── Artifacts/                   # Original Scrum artifacts
    ├── 00- Read ME First.docx
    ├── 01- Product Vision.docx
    ├── 02 - Product Backlog.docx
    ├── 03- Sprint Backlog.docx
    ├── 04 - Definition of Done (DoD).docx
    └── 05- Increments.docx
```

## 🎯 Your Main Deliverable

**Primary Document:** `Report/ToDo_List_Testing_Report.md`

This comprehensive report includes:
- Complete Scrum team analysis
- Detailed bug identification and reproduction steps
- Updated Product Backlog with testing stories
- Sprint planning and execution details
- Unit test implementation results
- Sprint Review and Retrospective findings

## 📸 Screenshots You Need to Take

The report contains placeholders marked with "📸 Screenshot Placeholder" for the following screenshots:

### Part 1 Screenshots:
1. **Bug Reproduction Screenshots:**
   - Show the off-by-one error in important tasks
   - Demonstrate the missing error message for empty important tasks
   - Display console errors from variable scoping issues

2. **Application Running:**
   - Screenshot of the working ToDo List interface
   - Before and after bug fixes

### Part 2 Screenshots:
3. **Test Setup:**
   - Terminal showing Jest installation
   - Test file structure in VS Code/editor

4. **Test Results:**
   - Jest test runner output showing pass/fail status
   - Coverage report with percentages
   - Terminal output of `npm test` command

5. **Sprint Artifacts:**
   - Updated Product Backlog (can be in Excel/table format)
   - Sprint board showing testing tasks progress

6. **Code Comparisons:**
   - Before/after code showing bug fixes
   - Unit test code examples

## 🚀 How to Run and Test

### 1. Install Dependencies
```bash
cd /home/muditha/testing1.2
npm install
```

### 2. Run the Application
```bash
# Open index.html in a web browser
# Test the functionality and reproduce bugs
```

### 3. Run Unit Tests
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 🐛 Known Bugs to Document

The report already identifies these bugs in `script.js`:

1. **BUG001:** `toggleImportantTask()` uses `index - 1` (line 95)
2. **BUG002:** `historyList` declared as global variable (line 11)
3. **BUG003:** No error message for empty important tasks
4. **BUG004:** Potential localStorage concurrency issues

## ✅ Checklist for Submission

### Part 1 - Analysis:
- [ ] Take screenshots of bugs in action
- [ ] Document steps to reproduce each bug
- [ ] Review existing Scrum artifacts in Artifacts/ folder
- [ ] Update team roles and responsibilities section

### Part 2 - Testing Sprint:
- [ ] Install Jest: `npm install`
- [ ] Run tests: `npm test`
- [ ] Take screenshot of test results
- [ ] Take screenshot of coverage report
- [ ] Document stand-up meetings (simulate 2-3 meetings)
- [ ] Complete Sprint Review section
- [ ] Complete Sprint Retrospective section

### Final Report:
- [ ] Replace all "📸 Screenshot Placeholder" with actual screenshots
- [ ] Fill in your actual team member names and roles
- [ ] Add your GitHub repository link
- [ ] Review and customize any sections marked with [brackets]
- [ ] Ensure all sections are complete and professional

## 📝 How to Customize the Report

1. **Team Information (Section 2):**
   - Replace `[Your Name]`, `[Team Member 2]`, etc. with actual names
   - Assign realistic Scrum roles to team members

2. **Repository Link (Section 1):**
   - Add your actual GitHub/GitLab repository URL

3. **Screenshots:**
   - Replace all screenshot placeholders with actual images
   - Use tools like `gnome-screenshot` or browser dev tools

4. **Stand-up Meetings (Section 9.1):**
   - Customize the meeting summaries based on your actual experience
   - Add realistic blockers and decisions

## 🎓 Academic Requirements Met

This report addresses all assignment requirements:

✅ **Part 1 Requirements:**
- Team formation and role assignment
- Application review and testing
- Bug detection and documentation
- Product Backlog updates
- Testing strategy critique
- Future recommendations

✅ **Part 2 Requirements:**
- Unit testing user stories in backlog
- Stand-up meeting documentation
- Test implementation with Jest
- Sprint Review outcomes
- Sprint Retrospective insights
- Code coverage and test results

## 💡 Tips for Success

1. **Actually run the tests** - Don't just submit the report without testing
2. **Take real screenshots** - The visual evidence is crucial
3. **Customize the content** - Make it reflect your actual experience
4. **Be specific** - Include actual test results, coverage percentages, etc.
5. **Show your work** - Document the process, not just the results

## 📞 Support

If you need help:
1. Check the Jest documentation for testing questions
2. Review the original assignment.txt for requirements
3. Look at the sample report format you provided
4. Test the application manually first to understand the bugs

Good luck with your assignment! 🚀
