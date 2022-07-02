// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug54055.phpt
  it("Bug #54055: PHP crashes when executing strval when precision setting is very high", function () {
    expect(parser.parseCode("<?php\nfor($i = 495; $i <= 1074; $i++) {\n  ini_set('precision', $i);\n  echo \"$i: len=\", strlen(strval(-1 * pow(2, -1074))), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
