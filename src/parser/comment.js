/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(api, tokens, EOF) {
  /**
   *  WORK IN PROGRESS
   *  @see https://github.com/glayzzle/php-parser/wiki/Annotations
   */
  return {
    /**
     *  Comments with // or #
     */
    read_comment: function() {
      var result = this.node('comment');
      var input = [this.text()];
      while(this.nextWithComments().token === tokens.T_COMMENT) {
        input.push(this.text());
      }
      return result(input);
    },
    /** 
     * Comments with / ** ** /
     */
    read_doc_comment: function() {
      var result = this.node('doc')(this.text());
      this.nextWithComments();
      return result;
    }
  }
};