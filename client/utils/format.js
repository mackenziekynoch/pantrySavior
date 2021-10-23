const moment = require('moment');

const getRelativeTime = (date) => {
  const dateObj = new Date(date);
  const now = new Date();

  if (dateObj.getTime() < now.getTime()) {
    return `Expired ${moment(dateObj).fromNow()}`;
  } else {
    return `Expires ${moment(dateObj).fromNow()}`;
  }
};


module.exports = {
  getRelativeTime
}
