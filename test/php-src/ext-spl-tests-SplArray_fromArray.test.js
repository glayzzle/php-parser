// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplArray_fromArray.phpt
  it("Check that SplArray::fromArray will not allow integer overflows", function () {
    expect(parser.parseCode("<?php\n$array = array(PHP_INT_MAX => 'foo');\n$splArray = new SplFixedArray();\ntry {\n  $splArray->fromArray($array);\n} catch (Exception $e) {\n  echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
