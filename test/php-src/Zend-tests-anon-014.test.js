// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon/014.phpt
  it("anonymous class trait binding", function () {
    expect(parser.parseCode("<?php\ntrait TaskTrait {\n    function run() {\n        return 'Running...';\n    }\n}\n$class = new class() {\n  use TaskTrait;\n};\nvar_dump($class->run());\n?>")).toMatchSnapshot();
  });
});
