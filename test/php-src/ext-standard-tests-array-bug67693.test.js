// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug67693.phpt
  it("Bug #67693 - incorrect push to empty array", function () {
    expect(parser.parseCode("<?php\n$array = array(-1 => 0);\narray_pop($array);\narray_push($array, 0);\narray_push($array, 0);\nvar_dump($array);\necho\"\\nDone\";\n?>")).toMatchSnapshot();
  });
});
