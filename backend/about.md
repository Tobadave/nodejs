git status

-- steps to move to local
git add .
git commit -m "Initial Commit"
git branch -M main
git remote add origin "https://github.com/Tobadave/nodejs"
git push -u origin main

- in other words :

# 1. Go into the folder with your files
cd path/to/your/local-folder

# 2. Turn it into a git repo
git init

# 3. Stage everything and make the first commit
git add .
git commit -m "Initial commit"

# 4. Name the branch main
git branch -M main

# 5. Connect it to your new GitHub repo
git remote add origin https://github.com/YOUR-USERNAME/YOUR-NEW-REPO.git

# 6. Push
git push -u origin main


-- comments are not permitted in JSON?

-- a tool for ignoring generator .gitignore generator