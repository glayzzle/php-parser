// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug45742.phpt
  it("Bug #45742 Wrong class array inpretetion using constant indexes", function () {
    expect(parser.parseCode("<?php\nclass Constants {\n    // Needs to be equal\n    const A = 1;\n    const B = 1;\n}\nclass ArrayProperty {\n    public static $array = array(\n        Constants::A => 23,\n        Constants::B => 42,\n    );\n}\nvar_dump( ArrayProperty::$array );\n?>")).toMatchSnapshot();
  });
});
