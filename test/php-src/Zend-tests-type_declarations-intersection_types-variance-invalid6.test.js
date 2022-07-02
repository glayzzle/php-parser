// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/invalid6.phpt
  it("Replacing not-loadable parent intersection type with loadable child intersection type", function () {
    expect(parser.parseCode("<?php\n// Let Y and Z be loadable.\ninterface Y {}\ninterface Z {}\nclass Test {\n    function method(): X&Y {}\n}\nclass Test2 extends Test {\n    function method(): Y&Z {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
