// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug66041.phpt
  it("Bug #66041: list() fails to unpack yielded ArrayAccess object", function () {
    expect(parser.parseCode("<?php\nfunction dumpElement() {\n    list($value) = yield;\n    var_dump($value);\n};\n$fixedArray = new SplFixedArray(1);\n$fixedArray[0] = 'the element';\n$generator = dumpElement();\n$generator->send($fixedArray);\n?>")).toMatchSnapshot();
  });
});
