// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/030.phpt
  it("Nullable return value", function () {
    expect(parser.parseCode("<?php\nfunction foo($x) : ?array {\n    return $x;\n}\nfoo([]);\necho \"ok\\n\";\nfoo(null);\necho \"ok\\n\";\nfoo(0);\n?>")).toMatchSnapshot();
  });
});
