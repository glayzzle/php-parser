/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
   *  Comments with // or # or / * ... * /
   */
  read_comment: function() {
    const text = this.text();
    const result = this.ast.prepare(
      text.substring(0, 2) === "/*" ? "commentblock" : "commentline",
      null,
      this
    );
    this.lex();
    return result(text);
  },
  /**
   * Comments with / ** ... * /
   */
  read_doc_comment: function() {
    const result = this.ast.prepare("commentblock", null, this);
    const text = this.text();
    this.lex();
    return result(text);
  }
};
