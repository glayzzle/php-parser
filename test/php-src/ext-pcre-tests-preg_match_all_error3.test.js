// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_match_all_error3.phpt
  it("Test preg_match_all() function : error conditions", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/pcre/php_pcre.c\n*/\n/*\n* Testing how preg_match_all reacts to being passed the wrong type of subpatterns array argument\n*/\necho \"*** Testing preg_match_all() : error conditions ***\\n\";\n$regex = '/[a-z]/';\n$subject = 'string';\nvar_dump(preg_match_all($regex, $subject, 'test'));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
