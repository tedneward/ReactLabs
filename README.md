# ReactLabs
This is a series of steps towards doing the Hands-On-Labs for ReactJS training. Each lab step is in its own Git branch, so that each step can be done independently if desired.

## Lab 1: Empty React project and Domain Model

### Step 1: Create the React project

### Step 2: Create a domain model



## Setup

If you are doing React for the first time, there are a few things you should have installed on your machine:

* [NodeJS](https://nodejs.org): Download the "LTS" (Long-Term Support) version for your platform, or use your platform's favorite package manager to install Node. If you have Node already installed, verify you have a relatively recent version by running `node -v`; anything after 6.x should work fine.

* [Git](https://git-scm.com): This lab assumes you have some familiarity with Git at the command-line, but not much is required. If you choose to use Git from a tool other than the command-line (such as from within SourceTree or VisualStudio), you will need to be able to check out branches.

* Text editor: You will need a text editor with which you are somewhat comfortable; I like [VSCode](https://code.visualstudio.com), but this is a topic of some discussion. The assumption is that during the labs, we will be running commands from the command-line, so if you use an editor with an integrated terminal, you may find it a more seamless/smooth experience. If you have Visual Studio installed, you probably still want to download a standalone editor--Visual Studio is great for doing .NET, and can be useful when doing a "mixed" React/.NET project, but this is going to be all React, all the time, and most of Visual Studio's approach will be overkill and wildly distracting or inappropriate for us.

* A recent version of a modern browser: Usually this means Chrome latest, but recent versions of any modern browser should also work.

This will get all of the necessary tools set up on your machine. To begin the labs, you have a choice: clone the project, or create a new project.

## Make your choice

There's pros and cons to each approach:

* *Create a new project* If you choose to create a new project, then simply create a directory somewhere on your development machine in which to do the work. The lab manual is in this GitHub project, however, so you will need to keep a browser window open to this page, and switching between the labs will simply be clicking the "Branch" dropdown to select the appropriate branch, and reading the README file displayed for that branch. This is the recommended approach, as it allows/forces you to do all the work by hand, which reinforces what you've heard in the lectures. This is the path that the lab instructions assume you are taking. (Note that even if you choose this path, you can still look at our solutions by selecting the next lab and looking at the starting point for that code. That is, if you are stuck on Lab 1, you can switch to Lab 2 and look at the files there, since Lab 2 picks up where Lab 1 finishes.)

* *Clone this project* In this scenario, you clone the project to your local machine, and any time you want to work on the next lab manual, you do a `git checkout lab-1` to advance to the lab step desired. Having a clone of the project ensures that you have everything local, in case the Internet goes wonky or you want to explore on the plane flight home, but does run the risk that you may have to "git stash" your changes when you move back and forth between branches. ***NOTE:*** Regardless of whether you want to work in this directory, or just run the code in this project, make sure to run `npm install` in this directory before `ng serve` or `ng test`, or you may get strange errors. (`npm` is the Node Package Manager, and it is used to pull down all the dependencies--including React itself--into the current directory so that the project can run.)

## Ready?

At this point, you are ready to begin the labs. Select "Branch: lab-1" in the Github browser window to bring up the README for Lab 1, which contains the lab instructions.

## Note on the MIT License

It's a hands-on-lab workshop, people. Don't be silly and do something stupid like put it into production. I shouldn't even have to tell you that, but lawyers are lawyers, and so it's all MIT-licensed so that it's legally clear that bad stuff could happen.

Note that while I own the IP on this project, you are free to hand the link to this project out to anyone you like back at the office, if you think it's helpful. Pull requests to correct typos in the code or the source are always welcome, and we thank you in advance for the assist.