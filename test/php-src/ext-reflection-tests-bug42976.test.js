// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug42976.phpt
  it("Bug #42976 (Crash when constructor for newInstance() or newInstanceArgs() fails)", function () {
    expect(parser.parseCode("<?php\nClass C {\n    function __construct(&$x) {\n        $x = \"x.changed\";\n    }\n}\n$x = \"x.original\";\nnew C($x); // OK\nvar_dump($x);\n$rc = new ReflectionClass('C');\n$x = \"x.original\";\n$rc->newInstance($x); // causes crash\nvar_dump($x);\n$x = \"x.original\";\n$rc->newInstanceArgs(array($x)); // causes crash\nvar_dump($x);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
