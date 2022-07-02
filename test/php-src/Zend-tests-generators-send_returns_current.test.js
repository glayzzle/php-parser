// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/send_returns_current.phpt
  it("$generator->send() returns the yielded value", function () {
    expect(parser.parseCode("<?php\nfunction reverseEchoGenerator() {\n    $data = yield;\n    while (true) {\n        $data = (yield strrev($data));\n    }\n}\n$gen = reverseEchoGenerator();\nvar_dump($gen->send('foo'));\nvar_dump($gen->send('bar'));\n?>")).toMatchSnapshot();
  });
});
