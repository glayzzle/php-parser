// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/ctor_dtor.phpt
  it("ZE2 The new constructor/destructor is called", function () {
    expect(parser.parseCode("<?php\nclass early {\n    function __construct() {\n        echo __CLASS__ . \"::\" . __FUNCTION__ . \"\\n\";\n    }\n    function __destruct() {\n        echo __CLASS__ . \"::\" . __FUNCTION__ . \"\\n\";\n    }\n}\nclass late {\n    function __construct() {\n        echo __CLASS__ . \"::\" . __FUNCTION__ . \"\\n\";\n    }\n    function __destruct() {\n        echo __CLASS__ . \"::\" . __FUNCTION__ . \"\\n\";\n    }\n}\n$t = new early();\n$t->__construct();\nunset($t);\n$t = new late();\n//unset($t); delay to end of script\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
