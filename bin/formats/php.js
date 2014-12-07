/**
 * Glayzzle : PHP on NodeJS
 * @url http://glayzzle.com
 * @author Ioan CHIRIAC
 * @license BSD-3-Clause
 */
module.exports = {
  handles: function(filename, ext) {
    return ext == '.php';
  }
  // runs the specified filename
  ,run: function(filename, PHP) {
    return (PHP.clean().require(filename) !== false);
  }
};