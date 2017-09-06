# Event image carousel
Event image carousel from a nginx autoindex json array.

# Nginx
Requires nginx version > `1.7.9`

Following code is needed in the config:
```
location /images {
	alias /srv/images;
	autoindex on;
        autoindex_format json;
}
```

Full example of the simpliest config:
```
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /srv/event-image-carousel;

        index index.html index.htm;

        server_name _;

        location / {
                try_files $uri $uri/ =404;
        }
        location /images {
                alias /srv/images;
                autoindex on;
                autoindex_format json;
        }
}
```
