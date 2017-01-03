/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var docSplit = /^(\s*\*[ \t]*|[ \t]*)(.*)$/gm;

module.exports = {
  /**
   *  Comments with // or # or / * ... * /
   */
  read_comment: function() {
    var result = this.node('doc');
    var lines = [];
    do {
      var line = this.text();
      if (line[0] === '#') {
        line = line.substring(1);
      } else {
        line = line.substring(2);
        if (line.substring(line.length - 2) === '*/') {
          line = line.substring(0, line.length - 2);
        }
      }
      lines.push(line.trim());
    } while(this.nextWithComments().token === this.tok.T_COMMENT);
    return result(false, lines);
  },
  /**
   * Comments with / ** ... * /
   */
  read_doc_comment: function() {
    var result = this.node('doc');
    var text = this.text();
    text = text.substring(2, text.length - 2);
    var lines = [];
    text = text.split(docSplit);
    for(var i = 2; i < text.length; i += 3) {
      lines.push(text[i].trim());
    }
    this.nextWithComments();
    return result(true, lines);
  }
};
