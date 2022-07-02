// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ex_func_null_during_property_write.phpt
  it("EX(func) can be null during write_property in an edge case", function () {
    expect(parser.parseCode("<?php\nclass a {\n    public static $i = 0;\n    function __destruct() {\n        if (self::$i++ != 0) throw new Exception;\n        $b = new a;\n        echo $b;\n    }\n}\nnew a;\n?>")).toMatchSnapshot();
  });
});
