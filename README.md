Project Intro
This README outlines the details of collaborating on this Ember application. A short introduction of this app could easily go here.
Prerequisites
You will need the following things properly installed on your computer.
Git
Node.js (with NPM)
Installation
git clone <repository-url> this repository
cd viejero
npm install
Running / Development
Runs the app in the development mode npm start
Visit your app at http://localhost:3000
The page will reload if you make edits.
Running Tests
npm test
Building
npm run build (production)
Deploying
npm run deploy (development)
npm run deploy:prod (production)
Build And Running Docker Image
docker build -t jessiecris/viejero-web .
docker run -it --init -p 80:9000 -u "node" -e "NODE_ENV=production" -d jessiecris/viejero:web-1.0
docker exec -it <container id> /bin/bash
Load Testing
ab -n 500 -c 20 http://localhost:3001/ (Apache Bench)
ab -n 500 -c 20 http://64.137.244.12/ (Apache Bench)
ab -n 500 -c 20 https://viejero-62932.firebaseapp.com/ (Apache Bench)
Where n = total number of request, c = number of concurrent request
Design
Alt text
Further Reading / Useful Links
Create React App
Material UI
Tachyons
