- my.cnf


进入docker中mysql，查找到default配置是在：/etc/mysql/my.cnf
将my.cnf的内容复制出来，并添加语句user=mysql。最后在启动时将其复制过去

解决登录mysql，使用mysql -u root -p命令： Access denied for user 'root'@'localhost' 



