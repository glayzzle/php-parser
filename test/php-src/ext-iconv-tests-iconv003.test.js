// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv003.phpt
  it("iconv() test 3", function () {
    expect(parser.parseCode("<?php\nfor ($i = 0; $i < 3; ++$i) {\n    if (@iconv('blah', 'blah', 'blah') != '') {\n        die(\"failed\\n\");\n    }\n}\necho \"success\\n\";\n?>")).toMatchSnapshot();
  });
});
