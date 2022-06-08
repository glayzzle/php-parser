// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/string_offset_int_min_max.phpt
  it("Accessing PHP_INT_MAX and PHP_INT_MIN as string offsets", function () {
    expect(parser.parseCode("<?php\n$str = \"\";\nvar_dump($str[PHP_INT_MAX]);\nvar_dump($str[PHP_INT_MIN]);\n?>")).toMatchSnapshot();
  });
});
