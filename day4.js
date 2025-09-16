
const skills = [
    { name: 'HTML', proficiency: 'Intermediate' },
    { name: 'CSS', proficiency: 'Advanced' },
    { name: 'JavaScript', proficiency: 'Beginner' },
    { name: 'Java', proficiency: 'Advanced' },
    { name: 'Python', proficiency: 'Intermediate' }
];

const skillsList = document.getElementById('skills-list');


skills.forEach(skill => {
    // Create the main list item element
    const listItem = document.createElement('li');
    listItem.classList.add('skill-item');

    // Create a span for the skill name
    const skillNameSpan = document.createElement('span');
    skillNameSpan.textContent = skill.name;
    skillNameSpan.classList.add('skill-name');

    // Create a span for the proficiency
    const skillProficiencySpan = document.createElement('span');
    skillProficiencySpan.textContent = `(${skill.proficiency})`;
    skillProficiencySpan.classList.add('skill-proficiency');

    // Append the name and proficiency spans to the list item
    listItem.appendChild(skillNameSpan);
    listItem.appendChild(skillProficiencySpan);

    // Append the complete list item to the main unordered list
    skillsList.appendChild(listItem);
});