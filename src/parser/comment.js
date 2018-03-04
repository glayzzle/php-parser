/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const docSplit = /^(\s*\*[ \t]*|[ \t]*)(.*)$/gm;

module.exports = {
  /**
   *  Comments with // or # or / * ... * /
   */
  read_comment: function() {
    const result = this.node("doc");
    return result(false, this.text());
  },
  /**
   * Comments with / ** ... * /
   */
  read_doc_comment: function() {
    const result = this.node("doc");
    return result(true, this.text());
  }
};
