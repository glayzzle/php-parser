// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/new_instanceof_expr.phpt
  it("new with an arbitrary expression", function () {
    expect(parser.parseCode("<?php\n$class = 'class';\nvar_dump(new ('std'.$class));\nvar_dump(new ('std'.$class)());\n$obj = new stdClass;\nvar_dump($obj instanceof ('std'.$class));\n?>")).toMatchSnapshot();
  });
});
