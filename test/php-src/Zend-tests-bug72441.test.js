// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72441.phpt
  it("Bug #72441 (Segmentation fault: RFC list_keys)", function () {
    expect(parser.parseCode("<?php\n$array = [];\nlist(\n    '' => $foo,\n    $bar\n) = $array;\n?>")).toMatchSnapshot();
  });
});
