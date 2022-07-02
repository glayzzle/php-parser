// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug20865.phpt
  it("Bug #20865 (array_key_exists and NULL key)", function () {
    expect(parser.parseCode("<?php\n    $ta = array(1, 2, 3);\n    $ta[NULL] = \"Null Value\";\n    var_dump(array_key_exists(NULL, $ta));\n?>")).toMatchSnapshot();
  });
});
