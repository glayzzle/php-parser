// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants_006.phpt
  it("Magic constants lowercased", function () {
    expect(parser.parseCode("<?php\nnamespace test;\nvar_dump(__dir__);\nvar_dump(__file__);\nvar_dump(__line__);\nclass foo {\n    public function __construct() {\n        var_dump(__method__);\n        var_dump(__class__);\n        var_dump(__function__);\n    }\n}\nnew foo;\nvar_dump(__namespace__);\n?>")).toMatchSnapshot();
  });
});
