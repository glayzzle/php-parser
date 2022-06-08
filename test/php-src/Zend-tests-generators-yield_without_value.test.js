// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_without_value.phpt
  it("yield can be used without a value", function () {
    expect(parser.parseCode("<?php\nfunction recv() {\n    while (true) {\n        var_dump(yield);\n    }\n}\n$receiver = recv();\nvar_dump($receiver->current());\n$receiver->send(1);\nvar_dump($receiver->current());\n$receiver->send(2);\nvar_dump($receiver->current());\n$receiver->send(3);\n?>")).toMatchSnapshot();
  });
});
