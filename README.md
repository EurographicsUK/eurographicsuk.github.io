**EGUK website made with Astro**
- [Design](#design)
- [Prerequisites](#prerequisites)
- [Updating Content](#updating-content)
- [Deployment](#deployment)
- [Miscellaneous](#miscellaneous)

### Design
[Miro board](https://miro.com/app/board/uXjVK_pye00=/) for site design.

### Prerequisites
1. Install Visual Studio Code [[link](https://code.visualstudio.com/Download)] as Text Editor
2. Install Node.js [[link](https://nodejs.org/en/download/package-manager)]: According to [Astro](https://docs.astro.build/en/install-and-setup/), running v18.17.1 or v20.3.0 or higher is preferred. (v19 is not supported.)

Note: Installing node.js also installs `npm` in our machine. As of 27 July 2024, node.js *v22.5.1* and npm *10.8.2* are used.

Run the following command in a terminal to check the version of both node.js and npm:
```
node -v
npm -v
```

1. Clone this repository in a machine for making changes
- Open Visual Studio Code
- Open Explorer in the top left tab
- Select 'Clone Repository', 'Clone from Github'
- Click the option that matches with this repository
- Select a directory as Repository Destination
- Click 'Open', and 'Yes, I trust the authors'

To check if the clone repository is linked with the remote one, open Terminal and run the following command:
```
git remote show origin
```

Both Fetch and Push URL under `* remote origin` should be the same with this repository's.

4. Run the following command to install astro locally in this directory
```
npm install 
```

Note: If astro cannot be installed properly via the command above, run the following command to install astro [manually](https://docs.astro.build/en/install-and-setup/#manual-setup):
```
npm install astro
```

Run the following command to check version of astro installed locally:
```
npx astro --version
```
As of 27 July 2024, astro *v4.12.2* is used.

After installation is complete, a new folder called `node_modules` is shown in the Explorer tab. Meanwhile, the terminal should show number of packages have been added and audited (with completion time), number of packages are looking for funding and number of vulnerabilities is found.

5. Run the following command to have a preview of the site that is run locally:
```
npm run dev
```
Open this site by clicking the link next to Local.

### Updating Content
Below is an overview of how each file is stored in this astro app (as of 27 July 2024):
```
/
├── public/
│   ├── decapcms
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   │   ├── favicons.ico
│   │   │   └── touch-icon.png
│   │   ├── images/
│   │   │   ├── eguk-logo.png
│   │   │   ├── group.png
│   │   │   └── ...
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── content/
│   │   ├── post/
│   │   │   ├── post-slug-1.md
│   │   │   ├── post-slug-2.mdx
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── LandingLayout.astro
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [...blog]/
│   │   ├── events/
│   │   │   └── ...
│   │   ├── proceedings/
│   │   │   └── ...
│   │   ├── 404.astro
│   │   ├── about.md
│   │   ├── applications.md
│   │   ├── blog.md
│   │   ├── contact.md
│   │   ├── course.md
│   │   ├── events.md
│   │   ├── index.md
│   │   ├── IPC.md
│   │   ├── proceedings.md
│   │   ├── research-area.astro
│   │   ├── resources.md
│   │   └── thanks.md
│   ├── utils/
│   ├── config.yaml
│   ├── env.d.ts
│   ├── navigation.js
│   ├── types.d.ts
│   └── vendor/
├── package.json
├── astro.config.mjs
└── ...
```

To creating a page as a markdown file under events folder, right click on events folder and select 'New File', then input the name of markdown file. Format of similar webpages can be found in other .md files. Most likely, each .md file starts with the following code:

```
---
title: 'webpage-title'
layout: '~/layouts/MarkdownLayout.astro'
---
```

Update `webpage-title` above for the title of a new webpage.

To add an image in the .md file, 
- Store an image inside `images` folder first (/src/assets/images)
- Input an following code for embedding the image in an .md file
```
![caption](src/assets/images/image-name.png)
```
where `image-name.png` is the name of an image. Update `caption` for the caption of an image.

### Deployment

After changes are made, run the following command to generate new static files:
```
npm run build
```
These new static files should be stored in `dist` (see reference: https://docs.astro.build/en/guides/deploy/github/).

Next, commit these new changes by:
- Click 'Source Control tab' (the third option on the left)
- Type what these changes are about in the Message box
- Click the blue 'Commit' button to commit changes
- Wait until the deployment to be completed in Github repo page (a new workflow run initiates as a yellow dot and completes as a green dot in 'Actions' tab)

### Miscellaneous
Q. css is not working properly after deployment (see similar issue here: https://stackoverflow.com/questions/77403679/astro-website-css-not-working-after-building-with-astro-build)

A. This is probably due to `config.yaml` and `astro.config.mjs` are not up to date.