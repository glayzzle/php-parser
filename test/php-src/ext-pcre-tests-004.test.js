// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/004.phpt
  it("abusing pcre", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match_all('/((?:(?:unsigned|struct)\\s+)?\\w+)(?:\\s*(\\*+)\\s+|\\s+(\\**))(\\w+(?:\\[\\s*\\w*\\s*\\])?)\\s*(?:(=)[^,;]+)?((?:\\s*,\\s*\\**\\s*\\w+(?:\\[\\s*\\w*\\s*\\])?\\s*(?:=[^,;]+)?)*)\\s*;/S', 'unsigned int xpto = 124; short a, b;', $m, PREG_SET_ORDER));\nvar_dump($m);\nvar_dump(preg_match_all('/(?:\\([^)]+\\))?(&?)([\\w>.()-]+(?:\\[\\w+\\])?)\\s*,?((?:\\)*\\s*=)?)/S', '&a, b, &c', $m, PREG_SET_ORDER));\nvar_dump($m);\nvar_dump(preg_match_all('/zend_parse_parameters(?:_ex\\s*\\([^,]+,[^,]+|\\s*\\([^,]+),\\s*\"([^\"]*)\"\\s*,\\s*([^{;]*)/S', 'zend_parse_parameters( 0, \"addd|s/\", a, b, &c);', $m, PREG_SET_ORDER | PREG_OFFSET_CAPTURE));\nvar_dump($m);\nvar_dump(preg_split('/PHP_(?:NAMED_)?(?:FUNCTION|METHOD)\\s*\\((\\w+(?:,\\s*\\w+)?)\\)/S', \"PHP_FUNCTION(s, preg_match)\\n{\\nlalala\", -1, PREG_SPLIT_DELIM_CAPTURE | PREG_SPLIT_OFFSET_CAPTURE));\n?>")).toMatchSnapshot();
  });
});
