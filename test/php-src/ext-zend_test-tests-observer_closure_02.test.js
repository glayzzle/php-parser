// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_closure_02.phpt
  it("Observer: Observability of fake closures", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public function bar()\n    {\n        echo 'Called as fake closure.' . PHP_EOL;\n    }\n}\n$callable = [new Foo(), 'bar'];\n$closure = \\Closure::fromCallable($callable);\n$closure();\necho 'DONE' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
