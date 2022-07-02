// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/valid6.phpt
  it("Replacing union type by intersection type", function () {
    expect(parser.parseCode("<?php\ninterface X {}\ninterface Y {}\ninterface Z {}\nclass A {\n    public function test(): X|Z {}\n}\nclass B extends A {\n    public function test(): X&Y {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
