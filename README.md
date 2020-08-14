# website
EmTech PSU Official Website, contains club information. labs, executive members, meetings, and extra resources.

# 
## Quick Start
```bash
git clone https://github.com/emtech-psu/website
cd website/
```

install dependencies
```bash
npm install
```

start dev server
```bash
npm start
```
#

## Building
### Production
```bash
npm build
```
### Development
```bash
npm build:dev
```

#

## Liniting
For this project eslint will be used for linting the configuration is stored at `./.eslintrc.json`
Linting can be done using one of the two commands below.
```bash
npm run eslint
// or
npx eslint ./src/**/*.js
```
Linting can be dont to a set of components or a single component.
```bash
npx eslint ./src/Components/Labs/Lab.js
```

#

## Todo List

- [x] Initial Configuration
    - [x] Webpack Configuration
    - [x] Package JSON Config
    - [x] Babel Config
    - [x] Github Actions
    - [x] Eslint Config
- [ ] Landing Page (Home)
    - [ ] Heading
    - [ ] Animation
    - [ ] Learn More
- [ ] Navigation
    - [x] NavBar
    - [x] Logo
        - [ ] Refine Logo
    - [ ] Links
    - [x] React Router Routing
    - [x] Mobile Responsiveness
    - [ ] Make Look Better
        - [ ] Transparent?
        - [ ] Solid on scroll ?
    - [ ] Fonts / Sizing
- [ ] About
    - [ ] Club Mission Statement
    - [ ] Description
    - [ ] Execetive Team
- [ ] Labs
    - [ ] Heading / Description
    - [ ] Lab Href Heading
    - [ ] Lab Cards
        - [ ] Icon
        - [ ] Description
        - [ ] Links
- [ ] Contact
    - [ ] Heading
    - [ ] Contact Resources
- [ ] Resources
    - [ ] Heading
    - [ ] Extra Resources
        - [ ] Raspberry Pi
        - [ ] Linux / Git
        - [ ] Modern Web Devlopment
        - [ ] Docker / Kubernetes
        - [ ] CI / CD 
        - [ ] Github
- [ ] React Routing
    - [x] Routes for all pages
    - [ ] Hash Links for in-page hrefs
    - [ ] 404 Page Routing
        - [ ] Auto redirect to personalized 404 page
    

## Contributors
[Collin Kleest](mailto:collinkleest@gmail.com)

[License](./LICENSE)