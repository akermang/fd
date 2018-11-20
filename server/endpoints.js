export default {
  // login: {
  //   url: '/api/utility/user-info',
  //   method: 'GET',
  //   contentType: 'application/json'
  // },
  // signout: {
  //   url: '/api/internal/commands/sign-out',
  //   method: 'POST',
  //   contentType: 'application/json'
  // },
  getdata: {
    url: '/api/Sheet/Get',
    method: 'GET',
    contentType: 'application/json'
  },
  savedata: {
    url: '/api/Sheet/Save',
    method: 'POST',
    contentType: 'application/json'
  }
};
