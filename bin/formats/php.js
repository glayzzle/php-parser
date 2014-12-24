/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
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