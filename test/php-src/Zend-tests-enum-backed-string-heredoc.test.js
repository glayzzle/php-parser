// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-string-heredoc.phpt
  it("String enum value with heredoc", function () {
    expect(parser.parseCode("<?php\nenum Foo: string {\n    case Bar = <<<BAR\n    Bar\n    bar\n    bar\n    BAR;\n    case Baz = <<<'BAZ'\n    Baz\n    baz\n    baz\n    BAZ;\n}\necho Foo::Bar->value . \"\\n\";\necho Foo::Baz->value . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
