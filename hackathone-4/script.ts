document.addEventListener("DOMContentLoaded", () => {
    // Select the form and resume output elements
    const form = document.getElementById("ResumeForm") as HTMLFormElement | null;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLElement | null;
  
    // If either form or resumeOutput is not found, log an error and exit
    if (!form || !resumeOutput) {
      console.error("Form or resume output element not found.");
      return;
    }
  
    // Function to generate the resume
    function generateResume(event: Event): void {
      event.preventDefault(); // Prevent form submission
  
      // Get input values
      const fullName = (document.getElementById("fullName") as HTMLInputElement | null)?.value;
      const email = (document.getElementById("email") as HTMLInputElement | null)?.value;
      const phoneNumber = (document.getElementById("phoneNumber") as HTMLInputElement | null)?.value;
      const education = (document.getElementById("education") as HTMLTextAreaElement | null)?.value;
      const experience = (document.getElementById("experience") as HTMLTextAreaElement | null)?.value;
      const skills = (document.getElementById("skills") as HTMLTextAreaElement | null)?.value;
  
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
    tr  
    // Attach the submit event listener to the form
    form.addEventListener("submit", generateResume);
  });
  