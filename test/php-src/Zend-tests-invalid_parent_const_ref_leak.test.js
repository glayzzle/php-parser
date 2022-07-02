// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/invalid_parent_const_ref_leak.phpt
  it("Leak when using an invalid parent:: reference in a constant definition", function () {
    expect(parser.parseCode("<?php\nclass A {\n    const B = parent::C;\n}\ntry {\n    A::B;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
