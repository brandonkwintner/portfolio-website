npm run build
scp -r ./build/* brandon@137.184.66.230:/var/www/bkwintner.com/html
# copies new files into nginx server (do this locally)

ssh brandon@137.184.66.230
sudo systemctl restart nginx
# restarts nginx server so new content can be seen