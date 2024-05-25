// Get Data Ls\
/**
 *
 * @param {*} key
 * @returns
 */
const getDataLs = (key) => {
  const Data = localStorage.getItem(key);
  if (Data) {
    return JSON.parse(Data);
  } else {
    return false;
  }
};

/**
 * Save Data Ls
 * @param {*} key
 * @param {*} StudentData
 */
const sendDataLs = (key, StudentData) => {
  const Data = localStorage.getItem(key);

  let lsData;
  if (Data) {
    lsData = JSON.parse(Data);
  } else {
    lsData = [];
  }
  lsData.push(StudentData);
  localStorage.setItem(key, JSON.stringify(lsData));
};

/**
 * single studen Data
 * @param {*} key
 * @param {*} id
 * @returns
 */
const singleStudentDataFunction = (key, id) => {
  const Data = JSON.parse(localStorage.getItem(key));
  console.log(Data);

  if (Data) {
    return Data.find((item) => item.id == id);
  } else {
    return false;
  }
};

const deleteStuden = (key, id) => {
  const Data = JSON.parse(localStorage.getItem(key));

 const Diletet = Data.filter((item) => item.id != id);

  localStorage.setItem(key, JSON.stringify(Diletet));
};
