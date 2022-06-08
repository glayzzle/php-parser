// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug40191.phpt
  it("Bug #40191 (use of array_unique() with objects triggers segfault)", function () {
    expect(parser.parseCode("<?php\n$arrObj = new ArrayObject();\n$arrObj->append('foo');\n$arrObj->append('bar');\n$arrObj->append('foo');\ntry {\n    $arr = array_unique($arrObj);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
