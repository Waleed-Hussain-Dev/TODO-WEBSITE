const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const completedCount = document.getElementById('completedCount');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const clearCompletedButton = document.getElementById('clearCompletedButton');
const resetFormButton = document.getElementById('resetFormButton');
const focusModeButton = document.getElementById('focusModeButton');

let tasks = [];
let activeFilter = 'all';
let focusMode = false;

const STORAGE_KEY = 'todoMaverickTasks';

const initialTasks = [
  {
    id: crypto.randomUUID(),
    title: 'Add your first task',
    notes: 'Use the form above to save tasks with due dates and priority.',
    dueDate: '',
    priority: 'normal',
    completed: false,
    createdAt: Date.now(),
  },
];

function loadTasks() {
  const stored = localStorage.getItem(STORAGE_KEY);
  tasks = stored ? JSON.parse(stored) : initialTasks;
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function formatDueDate(dateString) {
  if (!dateString) return 'No due date';
  return new Date(dateString).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  });
}

function updateSummary() {
  taskCount.textContent = tasks.length;
  completedCount.textContent = tasks.filter((task) => task.completed).length;
}

function getFilteredTasks() {
  const query = searchInput.value.trim().toLowerCase();

  return tasks
    .filter((task) => {
      if (activeFilter === 'active') return !task.completed;
      if (activeFilter === 'completed') return task.completed;
      if (activeFilter === 'priority') return task.priority !== 'normal';
      return true;
    })
    .filter((task) => {
      if (!query) return true;
      return task.title.toLowerCase().includes(query) || task.notes.toLowerCase().includes(query);
    })
    .sort((a, b) => b.priority.localeCompare(a.priority) || a.createdAt - b.createdAt);
}

function createTaskCard(task) {
  const card = document.createElement('li');
  card.className = 'task-card';
  if (task.completed) card.classList.add('completed');

  const topRow = document.createElement('div');
  topRow.className = 'task-card-top';

  const checkbox = document.createElement('button');
  checkbox.type = 'button';
  checkbox.className = `task-check${task.completed ? ' checked' : ''}`;
  checkbox.setAttribute('aria-label', task.completed ? 'Mark task as incomplete' : 'Mark task as complete');
  checkbox.addEventListener('click', () => toggleTaskCompletion(task.id));

  const details = document.createElement('div');
  details.className = 'task-details';

  const titleRow = document.createElement('div');
  titleRow.className = 'task-title';

  const titleText = document.createElement('span');
  titleText.textContent = task.title;

  const actions = document.createElement('div');
  actions.innerHTML = `
    <button type="button" title="Edit task">✏️</button>
    <button type="button" title="Delete task">🗑️</button>
  `;

  actions.querySelector('button[title="Edit task"]').addEventListener('click', () => populateForm(task));
  actions.querySelector('button[title="Delete task"]').addEventListener('click', () => deleteTask(task.id));

  titleRow.append(titleText, actions);

  const metaRow = document.createElement('div');
  metaRow.className = 'task-meta';
  metaRow.innerHTML = `
    <span class="priority-${task.priority}">${task.priority.toUpperCase()}</span>
    <span>${formatDueDate(task.dueDate)}</span>
  `;

  const notes = document.createElement('p');
  notes.className = 'task-notes';
  notes.textContent = task.notes || 'No additional details.';

  details.append(titleRow, metaRow, notes);
  topRow.append(checkbox, details);
  card.append(topRow);
  return card;
}

function renderTasks() {
  taskList.innerHTML = '';
  const filteredTasks = getFilteredTasks();

  if (!filteredTasks.length) {
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.innerHTML = `
      <strong>No tasks found</strong>
      <p>Try adding a new task, adjusting the filter, or clearing completed items.</p>
    `;
    taskList.append(emptyState);
    return;
  }

  filteredTasks.forEach((task) => taskList.append(createTaskCard(task)));
}

function addTask(event) {
  event.preventDefault();

  const title = document.getElementById('taskTitle').value.trim();
  const dueDate = document.getElementById('taskDate').value;
  const priority = document.getElementById('taskPriority').value;
  const notes = document.getElementById('taskNotes').value.trim();

  if (!title) return;

  tasks.unshift({
    id: crypto.randomUUID(),
    title,
    notes,
    dueDate,
    priority,
    completed: false,
    createdAt: Date.now(),
  });

  saveTasks();
  updateSummary();
  renderTasks();
  taskForm.reset();
}

function toggleTaskCompletion(id) {
  tasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
  saveTasks();
  updateSummary();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  updateSummary();
  renderTasks();
}

function populateForm(task) {
  document.getElementById('taskTitle').value = task.title;
  document.getElementById('taskDate').value = task.dueDate;
  document.getElementById('taskPriority').value = task.priority;
  document.getElementById('taskNotes').value = task.notes;

  document.querySelector('.btn.btn-primary[type="submit"]').textContent = 'Update task';
  document.querySelector('.btn.btn-primary[type="submit"]').dataset.editing = task.id;
}

function submitTask(event) {
  event.preventDefault();
  const editId = document.querySelector('.btn.btn-primary[type="submit"]').dataset.editing;
  if (!editId) return addTask(event);

  const title = document.getElementById('taskTitle').value.trim();
  const dueDate = document.getElementById('taskDate').value;
  const priority = document.getElementById('taskPriority').value;
  const notes = document.getElementById('taskNotes').value.trim();

  tasks = tasks.map((task) =>
    task.id === editId
      ? { ...task, title, dueDate, priority, notes }
      : task,
  );

  saveTasks();
  updateSummary();
  renderTasks();
  taskForm.reset();
  const submitBtn = document.querySelector('.btn.btn-primary[type="submit"]');
  submitBtn.textContent = 'Add task';
  delete submitBtn.dataset.editing;
}

function applyFilter(event) {
  filterButtons.forEach((button) => button.classList.toggle('active', button.dataset.filter === event.target.dataset.filter));
  activeFilter = event.target.dataset.filter;
  renderTasks();
}

function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  updateSummary();
  renderTasks();
}

function resetForm() {
  taskForm.reset();
  const submitBtn = document.querySelector('.btn.btn-primary[type="submit"]');
  submitBtn.textContent = 'Add task';
  delete submitBtn.dataset.editing;
}

function toggleFocusMode() {
  focusMode = !focusMode;
  document.body.classList.toggle('focus-mode', focusMode);
  focusModeButton.textContent = focusMode ? 'Exit focus mode' : 'Enter focus mode';
}

searchInput.addEventListener('input', renderTasks);
filterButtons.forEach((button) => button.addEventListener('click', applyFilter));
clearCompletedButton.addEventListener('click', clearCompletedTasks);
resetFormButton.addEventListener('click', resetForm);
focusModeButton.addEventListener('click', toggleFocusMode);
taskForm.addEventListener('submit', submitTask);

loadTasks();
updateSummary();
renderTasks();
