// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_count_values2.phpt
  it("basic array_count_values test", function () {
    expect(parser.parseCode("<?php\n$array1 = array(1,\n                \"hello\",\n                1,\n                \"world\",\n                \"hello\",\n                \"\",\n                \"rabbit\",\n                \"foo\",\n                \"Foo\",\n                TRUE,\n                FALSE,\n                NULL,\n                0);\nvar_dump(array_count_values($array1));\n?>")).toMatchSnapshot();
  });
});
