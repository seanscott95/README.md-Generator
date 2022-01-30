// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    if (license === "Apache License 2.0") {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === "BSD 3-Clause - New or Revised License") {
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    } else if (license === "BSD 2-Clause - Simplified or FreeBSD License") {
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
    } else if (license === "GNU General Public License (GPL)") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license === "GNU Library or Lesser General Public License (LGPL)") {
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    } else if (license === "MIT License") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === "Mozilla Public License 2.0") {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    } else if (license === "Boost Software License 1.0") {
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    } else if (license === "Eclipse Public License Version 2.0") {
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    } else if (license === "IBM Public License Version 1.0") {
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    } else if (license === "ISC License (ISC)") {
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    }
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    if (license === "Apache License 2.0") {
      return "License: Apache License 2.0 - https://opensource.org/licenses/Apache-2.0";
    } else if (license === "BSD 3-Clause - New or Revised License") {
      return "License: BSD 3-Clause / New or Revised License - https://opensource.org/licenses/BSD-3-Clause)";
    } else if (license === "BSD 2-Clause - Simplified or FreeBSD License") {
      return "License: BSD 2-Clause / Simplified or FreeBSD License - https://opensource.org/licenses/BSD-2-Clause";
    } else if (license === "GNU General Public License (GPL)") {
      return "License: GNU General Public License (GPL) - https://www.gnu.org/licenses/gpl-3.0";
    } else if (license === "GNU Library or Lesser General Public License (LGPL)") {
      return "License: GNU Library or Lesser General Public License (LGPL) - https://www.gnu.org/licenses/lgpl-3.0";
    } else if (license === "MIT License") {
      return "License: MIT License - https://opensource.org/licenses/MIT";
    } else if (license === "Mozilla Public License 2.0") {
      return "License: Mozilla Public License 2.0 - https://opensource.org/licenses/MPL-2.0";
    } else if (license === "Boost Software License 1.0") {
      return "License: Boost Software License 1.0 - https://www.boost.org/LICENSE_1_0.txt";
    } else if (license === "Eclipse Public License Version 2.0") {
      return "License: Eclipse Public License Version 2.0 - https://opensource.org/licenses/EPL-1.0";
    } else if (license === "IBM Public License Version 1.0") {
      return "License: IBM Public License Version 1.0 - https://opensource.org/licenses/IPL-1.0";
    } else if (license === "ISC License (ISC)") {
      return "License: ISC - https://opensource.org/licenses/ISC";
    };
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `This application is covered under the ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} ${renderLicenseBadge(data.license)}

## Description 
<p>${data.description}<p>
    
## Table of Contents 
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contribution)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation 
<p>${data.installation}<p> 

## Usage 
<p>${data.usage}</p>

## License 
<p> ${renderLicenseSection(data.license)}
</p> 

## Contribution 
<p>${data.contribution}</p>

## Tests 
<p>${data.test} </p>

## Questions 
<p> To reach me with additional questions please contact me via one of the following methods: </p>

- Link: [GitHub](https://github.com/${data.github})
- Link: [Email](${data.email})  
`;
}

module.exports = generateMarkdown;
