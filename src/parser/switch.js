/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     *  switch ::= T_SWITCH
     * </ebnf>
     */
    read_switch: function() {
      this.expect(tokens.T_SWITCH).next();
      // @todo
    }
  };
};