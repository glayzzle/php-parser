// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug24220.phpt
  it("", function () {
    expect(parser.parseCode("<?php\n    var_dump(range(\"2003\", \"2004\"));\n    var_dump(range(\"a\", \"z\"));\n    var_dump(range(\"1\", \"10\"));\n?>")).toMatchSnapshot();
  });
});
