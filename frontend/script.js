function analyzeSkillGap() {
    const name = document.getElementById("name").value;
    const career = document.getElementById("career").value;
    const skillsInput = document.getElementById("skills").value.toLowerCase();

    if (name === "" || career === "" || skillsInput === "") {
        alert("Please fill all fields");
        return;
    }

    const careerSkills = {
        frontend: ["html", "css", "javascript"],
        backend: ["javascript", "node", "database"],
        datascience: ["python", "statistics", "machine learning"]
    };

    const userSkills = skillsInput.split(",").map(skill => skill.trim());
    const requiredSkills = careerSkills[career];

    let missingSkills = requiredSkills.filter(
        skill => !userSkills.includes(skill)
    );

    let output = `<p>Hello ${name}</p>`;

    if (missingSkills.length === 0) {
        output += "<p>✅ You have all required skills!</p>";
    } else {
        output += "<p>❌ Missing Skills:</p><ul>";
        missingSkills.forEach(skill => {
            output += `<li>${skill}</li>`;
        });
        output += "</ul>";
    }

    document.getElementById("result").innerHTML = output;
}
