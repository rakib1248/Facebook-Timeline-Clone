/**
 * Alert Function
 * @param {*} msg
 * @param {*} type
 * @returns
 */
const creatAlert = (msg, type = "danger") => {
  return `<p class="alert-${type} alert d-flex justify-content-between"> ${msg} <button class="btn-close" data-bs-dismiss="alert"></button> </p>`;
};

/**
 * chack Email Validation
 * @param {*} email
 * @returns
 */
const isEmail = (email) => {
  const pettarn = /^[a-z0-9\._]{1,}@[a-z0-9]{2,}\.[a-z0-9]{2,4}$/;

  return pettarn.test(email);
};

const isMobail = (phone) => {
  const pettarn = /^(\+8801|8801|01)[0-9]{9}$/;

  return pettarn.test(phone);
};

/**
 * New Generate ID
 * @returns
 */
function CreatedId() {
  const timestamp = Date.now().toString(36); // Convert current time to a base-36 string
  const randomValue = Math.random().toString(36).substring(2, 15); // Generate a random string in base-36
  return timestamp + randomValue;
}



/**
 * Timeing Function
 * 
 * @param {*} timestamp 
 * @returns 
 */
const timeAgo = (timestamp) => {
  const now = new Date();
  const secondsPast = Math.floor((now - new Date(timestamp)) / 1000);

  if (secondsPast < 60) {
    return ` just now`;
  }
  if (secondsPast < 3600) {
    const minutes = Math.floor(secondsPast / 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  }
  if (secondsPast < 86400) {
    const hours = Math.floor(secondsPast / 3600);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  }
  if (secondsPast < 2592000) {
    const days = Math.floor(secondsPast / 86400);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
  if (secondsPast < 31536000) {
    const months = Math.floor(secondsPast / 2592000);
    return `${months} month${months !== 1 ? 's' : ''} ago`;
  }
  const years = Math.floor(secondsPast / 31536000);
  return `${years} year${years !== 1 ? 's' : ''} ago`;
}
