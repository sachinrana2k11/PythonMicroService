# using Nginx base image
FROM nginx

# delete nginx default .conf file
RUN rm /etc/nginx/conf.d/default.conf

# add the .conf file we have created
COPY NginxService/nginx.conf /etc/nginx/nginx.conf