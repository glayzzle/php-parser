// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug75653.phpt
  it("Bug #75653: array_values don't work on empty array", function () {
    expect(parser.parseCode("<?php\n$array[] = 'data1';\nunset($array[0]);\n$array = array_values($array);\n$array[] = 'data2';\n$array[] = 'data3';\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
