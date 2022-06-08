// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/005.phpt
  it("json_encode() & endless loop - 3", function () {
    expect(parser.parseCode("<?php\n$a = array();\n$a[] = $a;\nvar_dump($a);\nvar_dump(json_encode($a));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
