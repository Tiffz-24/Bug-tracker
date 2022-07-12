const express = require("express");
const bodyParser = require('body-parser');
var projectQuery = require('./projectQueries.js');
var userQuery = require('./userQueries.js');
var bugQuery = require('./bugQueries.js');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(bodyParser.json());

//endpoints for project data
app.get("/projects", async (req, res) => {
    //call function to get all projects 
    var result = await projectQuery.projectQuery(id = null, projName = null, updateParams = null, type = "project", requestType = "get");
    result = JSON.stringify({"response": result});
    res.send(result);
  });


app.get("/projects/:id", async (req, res) => {
    //call function to get a specific project
    var result = await projectQuery.projectQuery(id = req.params.id, projName = null, updateParams = null, type = "project", requestType = "get");
    result = JSON.stringify({"response": result});
    res.send(result);
});

app.post("/projects/:name", async (req, res) => {
    //call function to make a new project
    console.log("hello");
    var result = await projectQuery.projectQuery(id = null, projName = req.params.name, updateParams = null, type = "project", requestType = "post");
    result = JSON.stringify({"response": result});
    res.send(result);
    console.log("done");
});

app.put("/projects/:id", async (req, res) => {
    //call function to update a specific project
    var result = projectQuery.projectQuery(id = req.params.id, projName = null, updateParams = req.body, type = "project", requestType = "put");
    result = JSON.stringify({"response": result});
    res.send(result);
});
  
app.delete("/projects/:id", async (req, res) => {
    //call function to delete a specific project
    var result = await projectQuery.projectQuery(id = req.params.id, projName = null, updateParams = null, type = "project", requestType = "delete");
    result = JSON.stringify({"response": result});
    res.send(result);
});

//endpoints for user data
app.get("/users", async (req, res) => {
    //call function to get all users
    var result = await userQuery.userQuery(id = null, values = null, updateParams = null, type = "user", requestType = "get");
    result = JSON.stringify({"response": result});
    res.send(result);
    console.log("done");
  });


app.get("/users/:id", async (req, res) => {
    //call function to get a specific user
    var result = await userQuery.userQuery(id = req.params.id, values = null, updateParams = null, type = "user", requestType = "get");
    result = JSON.stringify({"response": result});
    res.send(result);
});

app.post("/users", async (req, res) => {
    //call function to make a new user
    var result = await userQuery.userQuery(id = null, values = req.body, updateParams = null, type = "user", requestType = "post");
    result = JSON.stringify({"response": result});
    res.send(result);
});

app.put("/users/:id", async (req, res) => {
    //call function to update a specific user
    var result = await userQuery.userQuery(id = req.params.id, values = null, updateParams = req.body, type = "user", requestType = "put");
    result = JSON.stringify({"response": result});
    res.send(result);
});
  
app.delete("/users/:id", async (req, res) => {
    //call function to delete a specific user
    var result = await userQuery.userQuery(id = req.params.id, projName = null, updateParams = null, type = "user", requestType = "delete");
    result = JSON.stringify({"response": result});
    res.send(result);
});

//endpoints for user to project relations
app.get("/projectUsers/:id", async (req, res) => {
    //call function to get all users on a project
    var result = await projectQuery.projectQuery(id = req.params.id, projectName = null, updateParams = null, type = "users", requestType = "get");
    result = JSON.stringify({"response": result});
    res.send(result);
  });

app.get("/userProjects/:id", async (req, res) => {
    //call function to get all projects that a user is on
    var result = await userQuery.userQuery(id = null, values = null, updateParams = null, type = "projects", requestType = "get");
    result = JSON.stringify({"response": result});
    res.send(result);
  });


app.post("/projectUsers/:id", async (req, res) => {
    //call function to assign a user to a project
    var result = await userQuery.userQuery(id = null, values = req.body, updateParams = null, type = "projects", requestType = "post");
    result = JSON.stringify({"response": result});
    res.send(result);
});

  
app.delete("/projectUsers", async (req, res) => {
    //call function to take a user off a project
    var result = await projectQuery.projectQuery(id = null, projName = null, updateParams = req.body, type = "users", requestType = "delete");
    result = JSON.stringify({"response": result});
    res.send(result);
});

//endpoints for bug data
app.get("/bugs", async (req, res) => {
    //call function to get all bugs 
    var result = await bugQuery.bugQuery(id = null, values = null, updateParams = null, requestType = "get");
    result = JSON.stringify({"response": result});
    res.send(result);
  });


app.get("/bugs/:projectId", async (req, res) => {
    //call function to get a specific bug from project id
    var result = await bugQuery.bugQuery(id = req.params.projectId, values = null, updateParams = null, requestType = "get");
    result = JSON.stringify({"response": result});
    res.send(result);
});


app.post("/bugs", async (req, res) => {
    //call function to make a new bug
    var result = await bugQuery.bugQuery(id = null, values = req.body, updateParams = null, requestType = "post");
    result = JSON.stringify({"response": result});
    res.send(result);
});

app.put("/bugs/:id", async (req, res) => {
    //call function to update a specific project
    var result = bugQuery.bugQuery(id = req.params.id, values = null, updateParams = req.body, requestType = "put");
    result = JSON.stringify({"response": result});
    res.send(result);
    console.log("called");
});
  
app.delete("/bugs/:id", async (req, res) => {
    //call function to delete a specific bug
    var result = await bugQuery.bugQuery(id = req.params.id, values = null, updateParams = null, requestType = "delete");
    result = JSON.stringify({"response": result});
    res.send(result);
});


app.listen(PORT, () => {
  return console.log(`Server listening on ${PORT}`);
});

