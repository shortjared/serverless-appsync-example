'use strict';

module.exports.hello = async (event, context) => {
  console.log(event);
  
  // create item in db, do any transformations you need
  // return back (with any additional props if you want)
  const item = event.arguments;
  item.addedProp = new Date().toISOString();
  return item;

};
