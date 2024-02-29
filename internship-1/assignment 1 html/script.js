document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Gather user input
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const summary = document.getElementById('summary').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Construct resume template with user input
    const resumeTemplate = `
        <h2>${fullName}</h2>
        <p>Email: ${email}</p>
        <p>${summary}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display generated resume
    alert(resumeTemplate);
});
