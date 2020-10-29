# DSC UNILAG FRONT END STUDY GROUP
## HOW TO SUBMIT TO THE REPO
### i assume you know your way around the terminal, and that you've already installed git
-  Login to your github account
 - **FORK THE REPO**: at the top right of the repo, you will see three buttons; watch, star, and fork click on fork see the image below
 
 ![fork](https://i.ibb.co/9p4F7Ph/fork.jpg)
 
 - a modal might pop up and you will be asked to choose an account to fork to, choose your github account, and then a copy of this repo will be created for you in your account.
 - go to the copy that was created for you, look for a brown button with **code**, click on it, you will see a dropdown, copy the link in the dropdown
 
 ![fork](https://i.ibb.co/8DKHgC7/image.png)
 
 - open your terminal, go to the directory you want  your project to be eg `cd c:/user/myuser/documents/` this means i should navigate to my documents directory
 - then type 
   `git clone "paste the link you copied from your copy/version of this repo here"` eg 
   `git clone https://github.com/ogheneovo12/HTML-Study-Group.git`
 - if you open your file explorer, you will see the project folder in your directory, open it with the code editor of your choice
 - you will see different folders in these format **WEEK1**, **WEEK2**, **WEEK3**, open the current assignment week eg **WEEK1**
 - **CREATE A NEW BRANCH**: to create a new branch enter into your terminal `git branch WEEK1` (you are free to name that **WEEK1** anything)
 - then enter `git checkout WEEK1` (replace **WEEK1** with whatever name you used in the previous step)
 - create a new file/folder (this depends on the given assignment's instruction)
 - your fullname should be the name of the file or folder
 - do your assigmnet in the file or folder you created with your name, when you are done open your terminal and
 - type `git add *`
 - then type `git commit -m "submitting week 1 assignment, ogheneovo"` (you can type anything you want within the double quote, but let it reflect what you did)
 - then enter `git push` in your repo, ensure you have internet
 - once you are done, open your own version of this repo on github, you will see a big brown button at the top with a message of **COMPARE AND PULL REQUEST**, click on it, 
 
 ![github pullrequest image](https://i.ytimg.com/vi/rgbCcBNZcdQ/maxresdefault.jpg)
 
 - follow through till the pull request have been created. voilla that's all. see image below, it should be something like this
 
 
 ![github pullrequest image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/43040346998/original/Gw-I7-mlL6fioR5PPW_mHOx9KY67DDGQkA.png?1556061766)
 
 
 
### HOW TO SUBMIT FOR WEEK1 AND WEEK2(this is for those who already submitted earlier before this day 10/29/2020 10:40PM)
 some changes were made to the repo after you submittted, you currently do not have them in your own version,
 so i will take you through this guide on how you can update your version of this repo to our current version.
 

- **COPY ORIGINAL REPO GIT URL**: at the top of this page you will see a brown button with text of **code** click it, a dropdown will open, copy the link in the dropdown (https://github.com/DSC-Unilag/HTML-Study-Group.git **this is the link copy it**) 
- then in terminal enter `git remote add upstream https://github.com/DSC-Unilag/HTML-Study-Group.git`
- then enter the following commands in your terminal
- ```# Sync your fork
  git fetch upstream
  git checkout master
  git merge upstream/master 
  ```
- then once you are done you will see two folders **WEEK1** and **WEEK2**, rename your assignments to your fullname and move them to their respective week folder,
- commit your changes and then push
- that should be all, if you encounter any issue, do well to ask on the whatsapp group chat and i would be glad to app
