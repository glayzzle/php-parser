// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug74607a.phpt
  it("Bug #74607 (Traits enforce different inheritance rules - number of required parameters)", function () {
    expect(parser.parseCode("<?php\nabstract class L1{\nabstract function m3($x);\n}\ntrait L2t{\nfunction m3($x, $y = 0){}\n}\nclass L2 extends L1{\nuse L2t;\n}\necho \"DONE\";\n?>")).toMatchSnapshot();
  });
});
