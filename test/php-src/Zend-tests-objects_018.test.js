// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_018.phpt
  it("Using the same function name on interface with inheritance", function () {
    expect(parser.parseCode("<?php\ninterface Itest {\n    function a();\n}\ninterface Itest2 {\n    function a();\n}\ninterface Itest3 extends Itest, Itest2 {\n}\necho \"done!\\n\";\n?>")).toMatchSnapshot();
  });
});
