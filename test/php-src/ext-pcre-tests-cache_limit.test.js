// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/cache_limit.phpt
  it("Compiled regex cache limit", function () {
    expect(parser.parseCode("<?php\ndefine('PREG_CACHE_SIZE', 4096+1);\n$re = '';\n$str = str_repeat('x', PREG_CACHE_SIZE);\nfor ($i=0; $i < PREG_CACHE_SIZE; ++$i) {\n    $re .= '.';\n    if (!preg_match(\"/$re/\", $str)) {\n        die('non match. error');\n    }\n}\nvar_dump(preg_match('/./', $str));   // this one was already deleted from the cache\nvar_dump(preg_match(\"/$re/\", $str)); // but not this one\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
