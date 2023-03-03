/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDef = 'Git is a free file manager that aids in tracking code changes. Git is very useful for collaborative projects.'
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDef = 'GitHub is a website forum where individuals can upload files and folders in order to collaborate or share code with others. GitHub uses git to upload repositories to GitHub. GitHub is also free to use.'
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDef = 'The code "git init" creates a git repository in the current folder where the code is executed. This is a necessary step in order to upload to GitHub.'
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDef = '"git clone" creates a copy of an existing repo into a new directory.'
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDef = '"git status" will console log the files status in relation to the git repo. For example, it will show when files have been committed to a repo or whether files have been added to the repo'
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDef = '"git add ." will add all files in the current folder to the git repo'
let gitAddCode = 'git add .'

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitCode = 'git commit -m "commit msg"'
let gitCommitDef = `'${gitCommitCode}' will commit all added files in the current folder to the git repo`


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDef = 'git push will save the current state of the git repo to GitHub.'