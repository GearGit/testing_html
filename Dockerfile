# Use the official Nginx lightweight image
FROM nginx:alpine

# Remove the default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your static files into the default Nginx directory
COPY index.html /usr/share/nginx/html/
COPY ssr.js /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
