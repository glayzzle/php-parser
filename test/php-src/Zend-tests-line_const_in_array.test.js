// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/line_const_in_array.phpt
  it("Use of __LINE__ in arrays", function () {
    expect(parser.parseCode("<?php\nvar_dump([\n    __LINE__,\n    __LINE__,\n    __LINE__,\n]);\n?>")).toMatchSnapshot();
  });
});
