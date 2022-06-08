// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug74053.phpt
  it("Bug #74053 (Corrupted class entries on shutdown when a destructor spawns another object)", function () {
    expect(parser.parseCode("<?php\nclass b {\n    function __destruct() {\n    echo \"b::destruct\\n\";\n    }\n}\nclass a {\n    static $b;\n    static $new;\n    static $max = 10;\n    function __destruct() {\n    if (self::$max-- <= 0) return;\n    echo \"a::destruct\\n\";\n    self::$b = new b;\n    self::$new[] = new a;\n    }\n}\nnew a;\n?>")).toMatchSnapshot();
  });
});
