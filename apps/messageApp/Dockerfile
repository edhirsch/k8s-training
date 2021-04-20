FROM node:8

# Create the working directory
WORKDIR /app

# Expose the sails default port
EXPOSE 1337

# Install sails, create the application and generate the message api
RUN npm install -g sails@0.12.3 && \
    sails new && \
    npm install sails-mongo@0.12.3 --save && \
    sails generate api message

# Copy the application files
COPY config/* config/

# Start sails
CMD ["sails", "lift"]
