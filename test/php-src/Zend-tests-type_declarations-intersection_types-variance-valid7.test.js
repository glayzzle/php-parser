// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/valid7.phpt
  it("Replacing object type with intersection type", function () {
    expect(parser.parseCode("<?php\n// It's sufficient that Y is loadable.\ninterface Y {}\nclass Test {\n    function method(): object {}\n    function method2(): object|int {}\n    function method3(): Y|int {}\n}\nclass Test2 extends Test {\n    function method(): X&Y {}\n    function method2(): X&Y {}\n    function method3(): X&Y {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
