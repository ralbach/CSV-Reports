module.exports = {
  jsonToCsv: (obj) => {
    obj = JSON.parse(obj);
    // get cols for csv
    let keys = {}
    recurseChildren(obj, keys, keyFunc)


    // build strings from keys and obj and push to array
    let arrKeys = Object.keys(keys);
    let ret = [];
    let headers = "";

    headers = arrKeys.join(",")
    ret.push(headers);
    stringBuilder(arrKeys, obj, ret)
    return ret
  }
}

let stringBuilder = (keys, obj, ret) => {
  let arr = [];
  keys.forEach( (key) => {
    arr.push(obj[key] ? obj[key] : "")
  })
  ret.push(arr.join(","))

  if (obj.children) {
    obj.children.forEach( (child) => {
      stringBuilder(keys, child, ret)
    })
  }
};

let keyFunc = (obj, keys) => {
  for (key in obj) {
    if (key !== "children") {
      keys[key] = 1
    }
  }
};

let recurseChildren = (obj, keys, func) => {
  func(obj, keys)
  if (obj.children) {
    obj.children.forEach( (child) => {
      recurseChildren(child, keys, func)
    })
  } else {
    return
  }
};