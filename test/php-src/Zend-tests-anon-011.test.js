// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon/011.phpt
  it("Ensure proper inheritance with get_class(anon class instance) used via class_alias (see also bug #70106)", function () {
    expect(parser.parseCode("<?php\nclass_alias(get_class(new class { protected $foo = 1; }), \"AnonBase\");\nvar_dump((new class extends AnonBase {\n    function getFoo() {\n        return $this->foo;\n    }\n})->getFoo());\n?>")).toMatchSnapshot();
  });
});
