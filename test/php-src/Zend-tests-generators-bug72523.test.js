// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug72523.phpt
  it("Bug #72523 (dtrace issue with reflection (failed test))", function () {
    expect(parser.parseCode("<?php\n$gen = (new class() {\n    function a() {\n        yield \"okey\";\n    }\n})->a();\nvar_dump($gen->current());\n?>")).toMatchSnapshot();
  });
});
