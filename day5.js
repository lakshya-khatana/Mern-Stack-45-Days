// Day 4 code to dynamically add skills
const skills = [
    { name: 'HTML', proficiency: 'Intermediate' },
    { name: 'CSS', proficiency: 'Advanced' },
    { name: 'JavaScript', proficiency: 'Beginner' },
    { name: 'React', proficiency: 'Novice' },
    { name: 'Python', proficiency: 'Intermediate' }
];

const skillsList = document.getElementById('skills-list');

skills.forEach(skill => {
    const listItem = document.createElement('li');
    listItem.classList.add('skill-item');

    const skillNameSpan = document.createElement('span');
    skillNameSpan.textContent = skill.name;
    skillNameSpan.classList.add('skill-name');

    const skillProficiencySpan = document.createElement('span');
    skillProficiencySpan.textContent = `(${skill.proficiency})`;
    skillProficiencySpan.classList.add('skill-proficiency');

    listItem.appendChild(skillNameSpan);
    listItem.appendChild(skillProficiencySpan);
    skillsList.appendChild(listItem);
});


// Day 5 Challenge Code starts here

// 1. Select the necessary elements from the DOM
const themeToggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;

// 2. Add an event listener to the button
themeToggleButton.addEventListener('click', () => {
    // 3. Use classList.toggle() to add or remove the 'dark-mode' class
    bodyElement.classList.toggle('dark-mode');

    // Optional: Change button text based on the current mode
    if (bodyElement.classList.contains('dark-mode')) {
        themeToggleButton.textContent = "Switch to Light Mode";
    } else {
        themeToggleButton.textContent = "Switch to Dark Mode";
    }
});