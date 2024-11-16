"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // Select the form and resume output elements
    const form = document.getElementById("ResumeForm");
    const resumeOutput = document.getElementById("resumeOutput");
    // If either form or resumeOutput is not found, log an error and exit
    if (!form || !resumeOutput) {
        console.error("Form or resume output element not found.");
        return;
    }
    // Function to generate the resume
    function generateResume(event) {
        var _a, _b, _c, _d, _e, _f;
        event.preventDefault(); // Prevent form submission
        // Get input values
        const fullName = (_a = document.getElementById("fullName")) === null || _a === void 0 ? void 0 : _a.value;
        const email = (_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value;
        const phoneNumber = (_c = document.getElementById("phoneNumber")) === null || _c === void 0 ? void 0 : _c.value;
        const education = (_d = document.getElementById("education")) === null || _d === void 0 ? void 0 : _d.value;
        const experience = (_e = document.getElementById("experience")) === null || _e === void 0 ? void 0 : _e.value;
        const skills = (_f = document.getElementById("skills")) === null || _f === void 0 ? void 0 : _f.value;
        // Validate all fields have values
        if (!fullName || !email || !phoneNumber || !education || !experience || !skills) {
            console.log("All fields are required to generate a resume.");
            return;
        }
        // Create the HTML content for the editable resume
        const resumeContent = `
        <h2>Resume</h2>
        <label><b>Name:</b></label><textarea rows="1">${fullName}</textarea>
        <label><b>Email:</b></label><textarea rows="1">${email}</textarea>
        <label><b>Phone:</b></label><textarea rows="1">${phoneNumber}</textarea>
        <h3>Education</h3><textarea rows="3">${education}</textarea>
        <h3>Experience</h3><textarea rows="3">${experience}</textarea>
        <h3>Skills</h3><textarea rows="3">${skills}</textarea>
      `;
        // Set the generated HTML to the resumeOutput div
        resumeOutput.innerHTML = resumeContent;
    }
    tr;
    // Attach the submit event listener to the form
    form.addEventListener("submit", generateResume);
});
