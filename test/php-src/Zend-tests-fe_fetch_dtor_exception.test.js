// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fe_fetch_dtor_exception.phpt
  it("Dtor may throw exception furing FE_FETCH assignment", function () {
    expect(parser.parseCode("<?php\n$v = new class {\n    function __destruct() {\n        throw new Exception(\"foo\");\n    }\n};\ntry {\n    foreach ([1, 2] as $v) {\n        var_dump($v);\n    }\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
