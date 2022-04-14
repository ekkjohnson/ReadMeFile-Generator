
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return 
  `# ${data.title}
  ##Contact
${data.name}
 ${data.github}
 ${data.email}
 ##Description
 ${data.description}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)


`;
}

module.exports = generateMarkdown;
