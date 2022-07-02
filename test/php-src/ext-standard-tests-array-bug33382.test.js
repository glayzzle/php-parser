// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug33382.phpt
  it("Bug #33382 (array_reverse() fails after *sort() )", function () {
    expect(parser.parseCode("<?php\n$array = array(1,2,3,4,5);\nsort($array);\nvar_dump(array_reverse($array));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
