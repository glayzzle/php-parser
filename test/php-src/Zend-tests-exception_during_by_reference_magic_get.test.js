// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_during_by_reference_magic_get.phpt
  it("Exception thrown by __get() during =& assignment", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    private $x;\n    public function &__get($name) {\n        throw new Exception(\"Foobar\");\n    }\n}\n$test = new Test;\n$y = 5;\ntry {\n    $test->x =& $y;\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
