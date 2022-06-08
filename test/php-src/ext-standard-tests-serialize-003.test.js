// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/003.phpt
  it("unserialize() floats with E notation (#18654)", function () {
    expect(parser.parseCode("<?php\nforeach(array(1e2, 5.2e25, 85.29e-23, 9e-9) AS $value) {\n    echo ($ser = serialize($value)).\"\\n\";\n    var_dump(unserialize($ser));\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
