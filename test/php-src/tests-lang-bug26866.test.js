// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug26866.phpt
  it("Bug #26866 (segfault when exception raised in __get)", function () {
    expect(parser.parseCode("<?php\nclass bar {\n    function get_name() {\n        return 'bar';\n    }\n}\nclass foo {\n    function __get($sName) {\n        throw new Exception('Exception!');\n        return new bar();\n    }\n}\n$foo = new foo();\ntry {\n    echo $foo->bar->get_name();\n}\ncatch (Exception $E) {\n    echo \"Exception raised!\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
