const axios = require('axios').default;
// axios.delete('http://localhost:3002/projects/6').then(res =>  {
//     // handle success
//     console.log(res.status);
//   }).catch(function (error) {
//     console.log(error);
// });

// axios.post('http://localhost:3002/projects/new').then(res =>  {
//     // handle success
//     console.log(res.status);
//   }).catch(function (error) {
//     console.log(error);
// });

// axios.put('http://localhost:3002/projects/1', { "project_name": 'changed', "status": 'completed' }).then(res =>  {
//     // handle success
//     console.log(res.status);
//   }).catch(function (error) {
//          console.log(error);
//      });

// axios.get('http://localhost:3002/projects').then(res =>  {
//     // handle success
//     console.log(res.data.response);
//   }).catch(function (error) {
//          console.log(error);
//      });

// axios.post('http://localhost:3002/users', {
//     first_name: "test",
//     last_name: "user",
//     email: "test@test.org",
//     password: "password"
// }).then(res =>  {
//     // handle success
//     console.log(res.status);
//   }).catch(function (error) {
//     console.log(error);
// });

axios.post('http://localhost:3002/bugs', {
    bug_name: "testbug",
    project_id: 1,
    status: "solved",
    priority: "low",
    raised_user: 1,
    notes: "test bug"
}).then(res =>  {
    // handle success
    console.log(res.status);
  }).catch(function (error) {
    console.log(error);
});
