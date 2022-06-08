// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/self_instanceof_outside_class.phpt
  it("instanceof self outside a class", function () {
    expect(parser.parseCode("<?php\n$fn = function() {\n    try {\n        new stdClass instanceof self;\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n};\n$fn();\n?>")).toMatchSnapshot();
  });
});
