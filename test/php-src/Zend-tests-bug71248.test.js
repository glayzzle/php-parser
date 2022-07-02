// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71248.phpt
  it("Bug #71248 (Wrong interface is enforced)", function () {
    expect(parser.parseCode("<?php\nclass Hint1 { }\nclass Hint2 { }\nabstract class Base {\n    public function __construct(Hint1 $x) { }\n}\ninterface Iface {\n    public function __construct(Hint1 $x);\n}\nclass Foo extends Base implements Iface {\n}\n$code = <<<'PHP'\nabstract class Bar extends Base {\n    public function __construct(Hint2 $x) { }\n}\nPHP;\neval($code);\n?>\nOK")).toMatchSnapshot();
  });
});
