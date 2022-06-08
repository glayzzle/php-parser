// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/add_005.phpt
  it("adding integers to doubles", function () {
    expect(parser.parseCode("<?php\n$i = 75636;\n$d = 2834681123.123123;\n$c = $i + $d;\nvar_dump($c);\n$c = $d + $i;\nvar_dump($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
