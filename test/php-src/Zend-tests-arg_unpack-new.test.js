// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arg_unpack/new.phpt
  it("Unpack arguments for new expression", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __construct(...$args) {\n        var_dump($args);\n    }\n}\nnew Foo(...[]);\nnew Foo(...[1, 2, 3]);\nnew Foo(...[1], ...[], ...[2, 3]);\n?>")).toMatchSnapshot();
  });
});
