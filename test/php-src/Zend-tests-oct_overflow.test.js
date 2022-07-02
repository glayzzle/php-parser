// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/oct_overflow.phpt
  it("testing integer overflow (32bit)", function () {
    expect(parser.parseCode("<?php\n$doubles = array(\n    076545676543223,\n    032325463734,\n    0777777,\n    07777777777777,\n    033333333333333,\n    );\nforeach ($doubles as $d) {\n    $l = (double)$d;\n    var_dump($l);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
