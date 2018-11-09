# urlshorterclient

A test client for [urlshorter](https://hub.docker.com/r/mengluo668/urlshorter/)

## Howto

1. execute `git clone https://github.com/supermanHub/urlshorterclient.git`
2. execute `cd urlshorterclient`
3. change your `/etc/hosts` and append blow to it:
```js
127.0.0.1	short.example.com
127.0.0.1	test.example.com
127.0.0.1	test1.example.com
127.0.0.1	test2.example.com
127.0.0.1	test3.example.com
```
4. execute `docker-compose up -d`
5. open browser and goto [http://short.example.com/](http://short.example.com/), enjoy it!

> For **WINDOWS**, your have to change `${PWD}` to `urlshorterclient` folder in `docker-compose.yaml` manually, and edit `hosts` in windows style!

## Other

You are free to edit the source files, please remember that you have to build the proejct by `npm run build` to make your changes effect!
