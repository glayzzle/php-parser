// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/dangling_send_target.phpt
  it("Yield from does not leave a dangling send target", function () {
    expect(parser.parseCode("<?php\nfunction gen1() {\n    yield from [yield];\n}\n$gen = gen1();\n$gen->send(new stdClass);\nfunction gen2() {\n    $x = yield;\n    yield from [1, 2, 3];\n}\n$gen = gen2();\n$gen->send(new stdClass);\n$gen->send(new stdClass);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
