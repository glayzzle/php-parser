// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_str_functions_opt-parameter.phpt
  it("Optional long parameter might be null (deprecated)", function () {
    expect(parser.parseCode("<?php\necho mb_strpos('abb', 'b', null, 'UTF-8') . \"\\n\";\necho mb_strrpos('abb', 'b', null, 'UTF-8') . \"\\n\";\necho mb_stripos('abb', 'B', null, 'UTF-8') . \"\\n\";\necho mb_strripos('abb', 'B', null, 'UTF-8') . \"\\n\";\necho mb_strstr('foobarbaz', 'ba', null, 'UTF-8') . \"\\n\";\necho mb_strrchr('foobarbaz', 'ba', null, 'UTF-8') . \"\\n\";\necho mb_stristr('foobarbaz', 'BA', null, 'UTF-8') . \"\\n\";\necho mb_strrichr('foobarbaz', 'BA', null, 'UTF-8') . \"\\n\";\necho mb_substr('foobarbaz', 6, null, 'UTF-8') . \"\\n\";\necho mb_strcut('foobarbaz', 6, null, 'UTF-8') . \"\\n\";\necho mb_strimwidth('foobar', 0, 3, null, 'UTF-8') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
