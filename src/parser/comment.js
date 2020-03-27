/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  /**
   *  Comments with // or # or / * ... * /
   */
  read_comment: function () {
    const text = this.text();
    let result = this.ast.prepare(
      text.substring(0, 2) === "/*" ? "commentblock" : "commentline",
      null,
      this
    );
    const offset = this.lexer.yylloc.first_offset;
    // handle location on comment
    const prev = this.prev;
    this.prev = [
      this.lexer.yylloc.last_line,
      this.lexer.yylloc.last_column,
      this.lexer.offset,
    ];
    this.lex();
    result = result(text);
    result.offset = offset;
    this.prev = prev;
    return result;
  },
  /**
   * Comments with / ** ... * /
   */
  read_doc_comment: function () {
    let result = this.ast.prepare("commentblock", null, this);
    const offset = this.lexer.yylloc.first_offset;
    const text = this.text();
    const prev = this.prev;
    this.prev = [
      this.lexer.yylloc.last_line,
      this.lexer.yylloc.last_column,
      this.lexer.offset,
    ];
    this.lex();
    result = result(text);
    result.offset = offset;
    this.prev = prev;
    return result;
  },
};
