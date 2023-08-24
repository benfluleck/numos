# Numos
[![Netlify Status](https://api.netlify.com/api/v1/badges/3fd91e49-1a2a-460d-ad80-5a0548cf70f5/deploy-status)](https://app.netlify.com/sites/lovely-longma-fb00bd/deploys)


# Table of Contents

- [Getting Started](#getting-started)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Testing](#testing)
- [Questions](#questions)
- [Support or Contribution](#support-or-contribution)
- [Status](#status)

## Getting Started
This is a clientside javascript application for a Pension Management Application built [Next JS](https://nextjs.org/) application.

- **Since no calculation formular was given for Pension savings over time. I have used the forumula for compound interest to calculate the points in the Graph. You can find the formular I used [here](https://www.thecalculatorsite.com/finance/calculators/compoundinterestcalculator.php). These can be found in the utils files.**



Pension Plan Configuraton             |  Educational Interactive Chart
:-------------------------:|:-------------------------:
<img width="500" alt="Pension plan" src="./screenshot/img1.png">  |  <img width="500" alt="Educational Interactive Chart" src="./screenshot/img2.png">



## Technology Stack

**Client Side**
1. Next.Js
2. Formik
3. ReCharts
4. Netlify


## Installation

1. Install [**Node JS**](https://nodejs.org/en/).

2. Clone the [**repository here**](git@github.com:benfluleck/numos.git)
3. [**cd**] into the root of the **project directory**.
4. Run `pnpm install` on the terminal to install project dependecies
5. Start the application usid `pnpm run dev`

**_Build Environments_**

### For Client
**Development**
```
pnpm run dev

```
- Navigate to `http://localhost:3000`

**Production**
```
pnpm run build

```


### CI/CD
The project uses a combination of Github Actions and Netlify. Each PR is tested and deployed on [here](https://lovely-longma-fb00bd.netlify.app/)

## Testing

Client side tests - Run `pnpm run test` on the terminal while within the **project root directory**.

Client side testing is achieved through the use of `jest` package. `jest` is used to test javascript code in
React applications.

Client side testing is yet to be configured but is being worked on currently

## Questions
For more details contact benfluleck@gmail.com

## Support or Contribution
For any suggestions or contributions or issues please do raise them or email me.
For **Contributiions**, Please clone the repo and implement a PR I would appreciate it

## Status
Still undergoing testing