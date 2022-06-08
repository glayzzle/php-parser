// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/029.phpt
  it("Refcount of constant LHS with nullsafe operator", function () {
    expect(parser.parseCode("<?php\n['']?->a;\n__DIR__?->a;\n?>")).toMatchSnapshot();
  });
});
