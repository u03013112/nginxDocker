# run this on macOS

sudo openssl req \
  -x509 -nodes -days 365 -newkey rsa:2048 \
  -subj "/CN=test.cpming.top" \
  -config openssl.cnf \
  -keyout /Users/u03013112/Documents/git/nginxDocker/www/ssl/self-signed.key \
  -out /Users/u03013112/Documents/git/nginxDocker/www/ssl/self-signed.crt