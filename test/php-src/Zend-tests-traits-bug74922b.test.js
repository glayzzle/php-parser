// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug74922b.phpt
  it("Bug #74922 (Composed class has fatal error with duplicate, equal const properties)", function () {
    expect(parser.parseCode("<?php\nrequire('bug74922b.inc');\ntrait T2 {public $var = Bug74922\\FOO;}\nclass Baz {use Bug74922\\T1, T2;}\necho \"DONE\";\n?>")).toMatchSnapshot();
  });
});
