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
    const result = this.node("commentblock");
    return result(this.text());
  },
  /**
   * Comments with / ** ... * /
   */
  read_doc_comment: function() {
    const text = this.text();
    const result = this.node(
      text.substring(0, 2) === "/*" ? "commentblock" : "commentline"
    );
    return result(text);
  }
};
