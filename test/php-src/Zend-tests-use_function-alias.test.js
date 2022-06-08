// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/alias.phpt
  it("aliasing imported functions to resolve naming conflicts", function () {
    expect(parser.parseCode("<?php\nnamespace foo {\n    function baz() {\n        return 'foo.baz';\n    }\n}\nnamespace bar {\n    function baz() {\n        return 'bar.baz';\n    }\n}\nnamespace {\n    use function foo\\baz as foo_baz,\n                 bar\\baz as bar_baz;\n    var_dump(foo_baz());\n    var_dump(bar_baz());\n    echo \"Done\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
