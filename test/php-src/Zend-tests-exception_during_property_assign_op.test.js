// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_during_property_assign_op.phpt
  it("Exception during read part of compound assignment operation on a property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __get($name) {\n        throw new Exception;\n    }\n}\n$test = new Test;\ntry {\n    $test->prop += 42;\n} catch (Exception $e) {}\nvar_dump($test);\n?>")).toMatchSnapshot();
  });
});
