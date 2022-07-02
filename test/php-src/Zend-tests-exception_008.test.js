// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_008.phpt
  it("Exception in __destruct while exception is pending", function () {
    expect(parser.parseCode("<?php\nclass TestFirst\n{\n    function __destruct() {\n        throw new Exception(\"First\");\n    }\n}\nclass TestSecond\n{\n    function __destruct() {\n        throw new Exception(\"Second\");\n    }\n}\n$ar = array(new TestFirst, new TestSecond);\nunset($ar);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
