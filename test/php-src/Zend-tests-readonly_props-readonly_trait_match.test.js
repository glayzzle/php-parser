// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/readonly_trait_match.phpt
  it("Readonly match of imported trait properties (valid)", function () {
    expect(parser.parseCode("<?php\ntrait T1 {\n    public readonly int $prop;\n}\ntrait T2 {\n    public readonly int $prop;\n}\nclass C {\n    use T1, T2;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
