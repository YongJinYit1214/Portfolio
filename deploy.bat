@echo off
echo 🚀 Deploying Portfolio Updates...
echo.

echo 📝 Adding changes to git...
git add .

echo 💾 Committing changes...
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update portfolio

git commit -m "%commit_msg%"

echo 📤 Pushing to GitHub...
git push origin main

echo 🌐 Deploying to GitHub Pages...
npm run deploy

echo.
echo ✅ Portfolio updated successfully!
echo 🌍 Live at: https://yongjinyit1214.github.io/Portfolio/
echo.
pause
