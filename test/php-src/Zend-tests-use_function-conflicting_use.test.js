// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/conflicting_use.phpt
  it("use function statements with conflicting names", function () {
    expect(parser.parseCode("<?php\nnamespace foo {\n    function baz() {\n        return 'foo.baz';\n    }\n}\nnamespace bar {\n    function baz() {\n        return 'bar.baz';\n    }\n}\nnamespace {\n    use function foo\\baz, bar\\baz;\n    echo \"Done\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
