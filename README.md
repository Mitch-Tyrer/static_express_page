######## PROJECT 6: Static Express Webpage ########

#### A sample portfolio page created with express, node, and pug ########

- create image folder
    - profile pic
    - 2 screenshots of each project at 550 by 550px
    - between 1 and 3 additional 1200px by 550px screenshots
- create a data.json file in the root dir
    - object literal that contains an array of projects
        -projects should contain:
            - id
            - project_name
            - description
            - technologies - an array of strings listing technologies used for the project
            - live_link - link to live version of project hosted on GitHub pages
            - github_link - link to the GitHub repo
            - image_urls - an array of strings containing paths to from the views folder to the images themselves.
            ###### I can add other projects I have completed #####

- create an app.js file
    - add variables to require dependencies
        - express
        - data.json
        - OPTIONAL: path module
    - setup middleware
        - view engine to pug
        - use a static route to serve static files in public folder
    - Set routes
        - an index render route for the Home page with locals set to data.projects
        - an about (/about) to render the about page
        - dynamic project route (/projects) based on the id of the project that render a customized version of a pug template to show each project.  This means adding data or "locals" as an object that contains data passed to the template.
    - app.listen on port 3000 and log a string to signify the server is running

- Handle errors
    - handle errors in a friendly way
    - add error handler to app.js that sets the error message to the user
    - log an error when app is pointed at a 404 url

- complete pug files
    - inject my data into the pug files. 
    - add _blank to live links so they open in a new window

- make sure css is connected to the templates properly


######### STYLE CHANGES #######

Updated color scheme and fonts.

### Things to add
- landing page
- direct link to a resume with download
                