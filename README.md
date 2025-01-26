# How to run:

0. app is deployed here: [https://ali4code.github.io/newsletter-app/](https://ali4code.github.io/newsletter-app/)
just be aware that newsapi.org will throw an CORS error if the location is not localhost (none commercial key)

1. docker:
navigate to root folder of the project in your terminal

```bash 
docker build . -t ali4code-newsletter
```

```bash 
docker run -db 8080:8080 ali4code-newsletter
```
then access app by navigating to [http://localhost:8080/](http://localhost:8080/)


2. local node: 

```bash 
nvm use
```
which will use node version 18

```bash 
npm run dev
```
then access app by navigating to [http://localhost:8080/](http://localhost:8080/)

# API keys

**to avoid committing api keys to repo (bad practice) i added another tab (auth tab)
but at the end to avoid confusion i committed the keys, if those gets scrapped and invalidated by the time you are seeing this you can go to news api sites and get api keys and replace them in auth tab


# project structure

// will add later