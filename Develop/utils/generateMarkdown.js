function renderLicenseBadge(license) {
  if (!license) return '';
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (!license) return '';
  return `(https://opensource.org/licenses/${license})`;
}

function renderLicenseSection(license) {
  if (!license) return '';
  return `This project is licensed under the ${license} license.`;
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact me at ${data.email}, or visit my GitHub profile [${data.githubUsername}](https://github.com/${data.githubUsername}).
`;
}

module.exports = generateMarkdown;
