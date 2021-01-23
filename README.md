# DSC UNILAG FRONT END STUDY GROUP
# PART ONE
## HOW TO SUBMIT TO THE REPO

### Perequisite 
You should have git installed on your system.
you can download git from here [Git Download](https://git-scm.com/downloads).
for those on termux follow this tutorial on how to setup git on your mobile device [setup git on termux with ssh login](https://www.youtube.com/watch?v=qQzDXjPa-14&t=1749s).
so if you have done all of the above we can proceed.

## NOTE: if you forked and cloned this repo earlier before following this guide, please and please delete it from both your local system and github account
## to delete from github, open the forked repo on github, then go to settings, scroll down to DANGER ZONE session, then click the  delete repository option.

### reading guide 
this guide will be covering users on termux and also users on their system 
where u see a statement marked with ##termux at the end your will ##etrm, know that it's a termux specific code or guide.

### STEP 1
DSC Unilag have a repo where your assignment will be submitted to, Inorder  to submit your assignment you will have to have a copy of that repo in your account
#### How do i get to do that?
**Fork the repo**:-
- ensure you are logged  in to your github account.
- visit our dsc repo link here [repo Link](https://github.com/DSC-Unilag/HTML-Study-Group).
- at the right top you will see three button click on the fork github repo (see image below).

 ![fork](https://i.ibb.co/S3z8dSZ/Screenshot-675-LI.jpg "fork a repo")
 
- when you have done that, you will see a copy of the html-study-group on your repo.
- look for the code button, click on it, and copy the address in the opened dropdown  (see image below ).

![code](https://i.ibb.co/7bn7MTr/Screenshot-678-LI.jpg "code copy link")

- for those on mobile you will have to switch to desktop view to see the code button

### STEP 2
##### clone the repo
- Now go to your terminal, could be powershell, command prompt or git bash, 
- you can search for git bash on your system and then launch it. 
- git bash is installed alongside git.
## termux
termux users will have to setup their storage access first by running .
``` termux-setup-storage ```
- it will prompt for permission to access your android storage, allow it.
- something that termux users should note is that, file created outside storage/shared, your phone device cant access them only termux can access them, so incase you have a mobile editor for writting your code, you would love to make it acccessible. 
- to do that you will have to make termux point to storage/shared 
- so do ```cd storage/shared ```
## etrm

- now enter this
``` git clone "the link you copied from the code button  ```
*** ensure to click enter whenever u copy/type a command ***

now you should see something similar to the image below

![cloning terminal](https://i.ibb.co/PW2DvpN/Screenshot-680.png "cloning repo")

- now enter this ```ls```
- names of files in your current directory will be listed, try checking if you will see the html-study-group folder

- after then cd/enter into the html-study-group folder
```cd html-study-group```

### STEP 3
##### checkout to beginners braanch
- you will have to enter into the branch containing the 2021/Beginner/Week1+ folder (Note wmeek1+ means it applies for week1-8), so to do that, type
``` git checkout cohort2_beginners ```


### STEP 4
##### submitting your assignment
- use your file explorer/file manager to open the html-study-group folder.
- you will see the 2021 folder, open it, then you will see the week1 folder.
- when you open the week 1 folder you will see a submission.md file.
- inside the week1 folder, create your assignment folder.
- if you have already done your assignment in another folder, copy it and place it in the 2021 folder.
- ensure that your assignment folder name is your fullname.
- once you are done with your assignment open the submmision.md file.
- you will see a sample format for filling your submission details,
eg
## fullname - foldername - whatsappnumber
- JohnDoe - JohnDoe - 0701234567

- once you are done with the above step go back to your terminal, 
- ensure that you have cd into the html-study-group directory already
- then stage and commit your files like this
``` 
    git add *
    git commit -m "commit message"
 ```
 where commit message could be anything to reflect the changes you did to the file, eg "i finished my week 1 assignment"
 
 #### push
 - so you will have to push your changes
 by doing
 ``` git push ```
 
 ### Step 5
 ##### create a pull Request
 - inorder for the tutors to view and grade your submissions, you will have to create a pull request from the cohort2_beginners branch on your forked repo.
 - there is a likely hood that after your push you will see a big brown button at the top of your forked repo with a compare and pull request button 
 just click on it and it will take you directly to the create pull request view.
 
 - incase you cant see this button on your repo dont panic
 - look at the left of your repo you will see a dropdown button with a text of master, click on it and switch to cohort2_beginners folder
 - then you will see create pull request as it is on the image below, click on it, it will also take you to the create pull request view
 
 see image of the pull request view below
 
 
 - in the textbox write anything to reflect your assignment changes like what you did when you commited your assignment.
 
 - at the bottom you will see a create pull request button click on it.









