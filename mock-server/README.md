# Mockserver with Stubby
* https://github.com/mrak/stubby4node

## Install
```
$npm install -g stubby
```

## Start mock server
```
$stubby -d api.yml
```
List of URLs
* Success = http://localhost:8882/product/1
* Not found = http://localhost:8882/product/2
* Success with timeout 6 seconds = http://localhost:8882/product/4
