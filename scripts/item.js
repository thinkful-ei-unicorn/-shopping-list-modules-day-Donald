const validateName = (name) => {
    if (name === ''){
     throw new TypeError("Name must not be blank.")
}; 
};

const create = (name) => {
  let item = {id: cuid(),  name: name, checked: false};
    return item;
};

export default {
    validateName,
    create 
};
