
exports.getDate = function getDate() {
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  let today = new Date();
  return today.toLocaleDateString("en-US", options);
}

exports.getDay = function getDay() {
  let options = {
    weekday: 'long',
  };
  let today = new Date();
  return today.toLocaleDateString("en-US", options);
}
