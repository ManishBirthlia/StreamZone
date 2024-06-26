# Use a specific Node.js version
FROM node:latest
# Installing ffmpeg in the docker container
RUN apt-get update && apt-get upgrade -y && apt-get install -y ffmpeg
# Verify node and npm installation
RUN node -v && npm -v
# Install nodemon globally using npm
RUN npm install -g nodemon
# Set the working directory
WORKDIR /home/app/
# Copy the current directory contents into the container at /home/app
COPY . .
# Changing current directory to /home/app/Server
WORKDIR /home/app/Server/
# Install dependencies
RUN npm run build 
# Expose the port the app runs on
EXPOSE 3000
# Run the application with nodemon
CMD ["nodemon", "index.js"]
