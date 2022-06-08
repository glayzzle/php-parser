// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78986.phpt
  it("Bug #78986: Opcache segfaults when inheriting ctor from immutable into mutable class", function () {
    expect(parser.parseCode("<?php\ndefine('TEST_TEST', 1);\nclass TestClass2 {\n    function __construct() {}\n}\nclass TestClass extends TestClass2 {\n    var $test = [\n        TEST_TEST => 'test'\n    ];\n}\nvar_dump(new TestClass());\n?>")).toMatchSnapshot();
  });
});
