rsync -av -e ssh --exclude=blog/server/node_modules --exclude=blog/admin/node_modules --exclude=blog/front/node_modules 
--exclude=blog/volume --exclude=blog/front/.next --exclude=blog/admin/public --exclude=blog/server/app
blog root@47.105.179.36:/root