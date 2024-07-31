docker build build-tools/ -t vortexscans
docker run -v .:/var/app -p 3000:3000 vortexscans