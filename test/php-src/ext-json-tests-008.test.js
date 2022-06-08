// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/008.phpt
  it("json_decode() with large integers", function () {
    expect(parser.parseCode("<?php\n$json = '{\"largenum\":123456789012345678901234567890}';\n$x = json_decode($json);\nvar_dump($x->largenum);\n$x = json_decode($json, false, 512, JSON_BIGINT_AS_STRING);\nvar_dump($x->largenum);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
