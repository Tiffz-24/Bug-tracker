
const data = {
    response: [
      { project_id: 1, project_name: 'changed', status: 'completed' },
      { project_id: 3, project_name: 'test2', status: 'in progress' }
    ]
  };
console.log(Object.values(data.response).map(a => (a.project_name)));