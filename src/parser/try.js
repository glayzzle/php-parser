/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/glayzzle-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     *  try ::= T_TRY
     * </ebnf>
     */
    read_try: function() {
      this.expect(tokens.T_TRY).next();
      // @todo
    }
  };
};