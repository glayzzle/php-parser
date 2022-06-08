// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/044.phpt
  it("Integer validation with spaces", function () {
    expect(parser.parseCode("<?php\n$vals = array(\n\"\n \",\n\" \",\n\" 123\",\n\" 123.01 \",\n);\nforeach ($vals as $var) {\n    var_dump(filter_var($var, FILTER_VALIDATE_FLOAT));\n}\n?>")).toMatchSnapshot();
  });
});
