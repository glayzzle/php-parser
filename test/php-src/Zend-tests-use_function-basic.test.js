// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/basic.phpt
  it("import namespaced function", function () {
    expect(parser.parseCode("<?php\nnamespace foo\\bar {\n    function baz() {\n        return 'foo.bar.baz';\n    }\n    function qux() {\n        return baz();\n    }\n}\nnamespace {\n    use function foo\\bar\\baz, foo\\bar\\qux;\n    var_dump(baz());\n    var_dump(qux());\n    echo \"Done\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
