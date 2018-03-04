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
    const result = this.node(
      text.substring(0, 2) === "/*" ? "commentblock" : "commentline"
    );
    this.token = this.lexer.lex() || this.EOF;
    return result(text);
  },
  /**
   * Comments with / ** ... * /
   */
  read_doc_comment: function() {
    const result = this.node("commentblock");
    const text = this.text();
    this.token = this.lexer.lex() || this.EOF;
    return result(text);
  }
};
