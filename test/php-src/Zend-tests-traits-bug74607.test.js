// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug74607.phpt
  it("Bug #74607 (Traits enforce different inheritance rules - return types)", function () {
    expect(parser.parseCode("<?php\nabstract class L1{\nabstract function m3($x);\n}\ntrait L2t{\nfunction m3($x): int{}\n}\nclass L2 extends L1{\nuse L2t;\n}\necho \"DONE\";\n?>")).toMatchSnapshot();
  });
});
