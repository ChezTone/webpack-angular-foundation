FROM nginx
#configure
RUN rm /etc/nginx/conf.d/*
COPY ./nginx.conf /etc/nginx/conf.d/
#copy generated files
COPY ./dist/ /var/www/

