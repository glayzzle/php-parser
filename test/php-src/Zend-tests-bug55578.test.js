// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug55578.phpt
  it("Bug #55578 (Segfault on implode/concat)", function () {
    expect(parser.parseCode("<?php\n$options = array();\nclass Foo {\n    public function __toString() {\n        return 'Foo';\n    }\n}\nfunction test($options, $queryPart) {\n    return ''. (0 ? 1 : $queryPart);\n}\nvar_dump(test($options, new Foo()));\n?>")).toMatchSnapshot();
  });
});
