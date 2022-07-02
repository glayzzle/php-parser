// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_026.phpt
  it("Nested exceptions in destructors", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static $max=0;\n    function __destruct() {\n        if (self::$max--<0)\n            X;  \n        $a = new A;\n        Y;      \n    }\n}\nnew A;\n?>")).toMatchSnapshot();
  });
});
