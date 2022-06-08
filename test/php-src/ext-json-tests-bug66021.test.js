// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug66021.phpt
  it("Bug #66021 (Blank line inside empty array/object when JSON_PRETTY_PRINT is set)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    private $bar = 'baz';\n}\necho json_encode(array(array(), (object) array(), new Foo), JSON_PRETTY_PRINT);\n?>")).toMatchSnapshot();
  });
});
