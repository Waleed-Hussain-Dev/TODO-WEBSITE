# Todo Maverick

**The most advanced todo app with smart productivity features.**

## Description

Todo Maverick is a cutting-edge, feature-rich todo application engineered to transform how you manage tasks and boost your productivity. Whether you're a busy professional, student, creative, or anyone juggling multiple responsibilities, Todo Maverick provides an intuitive and powerful platform to organize, prioritize, and accomplish your goals faster.

Built with **vanilla HTML, CSS, and JavaScript** (no frameworks, no bloat), this app delivers a sleek, modern dark-themed interface with lightning-fast performance. Every feature is carefully crafted to minimize friction between you and your tasks, so you can focus on what matters most.

**Why Todo Maverick?**
- **Zero Setup Required**: Just open and start using—no account, no login, no syncing complexity
- **Lightning Fast**: Pure vanilla code means instant responsiveness on any device
- **Privacy First**: All your data stays on your computer. No cloud, no tracking, no selling your data
- **Beautiful Design**: Modern dark theme with smooth animations and thoughtful UX
- **Powerfully Simple**: Advanced features presented in a clean, intuitive interface
- **Completely Offline**: Works entirely offline—perfect for work anywhere, anytime

Whether you need to manage a simple daily checklist or juggle complex projects with multiple priorities and deadlines, Todo Maverick has the tools to keep you organized and on track.

## Features

- **📝 Task Management**
  - Create tasks with title, due date, priority level, and project tags
  - Add detailed notes to provide context for each task
  - Edit existing tasks directly from the app
  - Delete tasks you no longer need

- **✅ Smart Task Controls**
  - Mark tasks as complete with a single click
  - Toggle between active and completed tasks
  - Clear all completed tasks at once
  - Undo actions to restore deleted tasks

- **🔍 Search & Filter**
  - Search tasks by title or notes content
  - Filter tasks by status (all, active, completed)
  - Filter by priority level (high-priority tasks)
  - Sort tasks by newest, oldest, priority, or due date

- **🎯 Priority & Organization**
  - Set task priority levels: Normal, High, or Critical
  - Organize tasks by project or category
  - Drag-and-drop reordering (planned feature)

- **🌙 Customization**
  - Dark/light theme toggle for comfortable viewing
  - Real-time task summary panel
  - Focus mode for distraction-free productivity

- **💾 Data Persistence**
  - All tasks are automatically saved to local storage
  - Your data persists across browser sessions
  - No server or login required

## Getting Started

### Installation

1. Download the project files to your computer
2. Open `INDEX.html` in any modern web browser
3. Start adding your tasks!

### Usage

#### Adding a Task
1. Fill in the task form at the top:
   - **Task title** (required): What needs to be done?
   - **Due date** (optional): When is it due?
   - **Priority**: Select Normal, High, or Critical
   - **Project**: Assign it to a project or category
   - **Notes**: Add any additional details
2. Click "Add task" to save it
3. Use "Reset" to clear the form without saving

#### Managing Tasks
- **Complete a task**: Click the checkbox on the left side of the task card
- **Edit a task**: Click the pencil (✏️) icon on the task card
- **Delete a task**: Click the trash (🗑️) icon on the task card
- **Clear completed tasks**: Use the "Clear completed" button in the hero section

#### Searching & Filtering
- **Search**: Use the search bar to find tasks by title or notes
- **Filter**: Click filter buttons to show only active or completed tasks
- **Sort**: Use the "Sort by" dropdown to organize tasks by newest, oldest, priority, or due date

#### Theme Toggle
- Click the moon (☾) icon in the header to switch between dark and light themes

#### Focus Mode
- Click "Enter focus mode" for a distraction-free productivity experience

## Project Structure

```
DEMO/
├── INDEX.html       # Main HTML file with app structure
├── styles.css       # Styling and theme configuration
├── script.js        # Application logic and interactivity
├── README.md        # This file
└── TODO.html/       # Additional todo-related files (folder)
```

## Technologies Used

- **HTML5** - Semantic markup and forms
- **CSS3** - Modern styling with CSS custom properties (variables)
- **JavaScript (Vanilla)** - No frameworks, pure ES6+ code
- **LocalStorage API** - Client-side data persistence
- **Crypto API** - UUID generation for unique task IDs

## Browser Compatibility

Works on all modern browsers that support:
- ES6+ JavaScript features
- CSS Custom Properties
- LocalStorage API
- Crypto.getRandomValues()

Recommended: Chrome, Firefox, Safari, Edge (latest versions)

## Features Breakdown

### Task Properties
Each task stores:
- Unique ID (UUID)
- Title (required)
- Notes (optional)
- Due date (optional)
- Priority (normal, high, critical)
- Project/category (optional)
- Completion status
- Creation timestamp

### Data Storage
- Tasks are stored in browser's localStorage under the key `todoMaverickTasks`
- All data is saved locally on your computer
- No data is sent to any server

## Tips for Best Experience

1. **Use project tags** to organize tasks by category or project
2. **Set priorities** to focus on what matters most
3. **Add due dates** to track deadlines
4. **Use notes** for context and additional information
5. **Search frequently** to find tasks quickly
6. **Enter focus mode** when you need to concentrate

## Future Enhancements

- Drag-and-drop task reordering
- Recurring tasks
- Task categories with custom colors
- Recurring reminders and notifications
- Export tasks to CSV/PDF
- Cloud sync (optional)

## License

This project is open source and available for personal and commercial use.

## Support

If you encounter any issues or have suggestions for improvements, please review the code in `script.js` and `styles.css` or enhance the app with your own features!

---

**Make your productivity count with Todo Maverick.** 🚀
