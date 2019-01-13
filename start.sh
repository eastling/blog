if [ ! -d "/volume" ]; then
  mkdir /volume
  mkdir /volume/_next
  mkdir /volume/front-logs
  touch /volume/front-logs/access.log
  touch /volume/front-logs/error.log
  mkdir /volume/server-logs
  touch /volume/server-logs/access.log
  touch /volume/server-logs/error.log
  mkdir /volume/mysql
fi

/usr/local/bin/docker-compose up --force-recreate