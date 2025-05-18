export const printLog = (tag, msg) => {
  if (msg) {
    console.log(tag, msg);
  } else {
    console.log(tag);
  }
};

export const printError = (tag, msg) => {
  if (msg) {
    console.error(tag, msg);
  } else {
    console.error(tag);
  }
};
