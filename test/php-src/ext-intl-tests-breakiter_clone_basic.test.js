// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter_clone_basic.phpt
  it("IntlBreakIterator: clone handler", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$bi = new IntlRuleBasedBreakIterator('[\\p{Letter}\\uFFFD]+;[:number:]+;');\n$bi_clone = clone $bi;\nvar_dump(get_class($bi), get_class($bi_clone));\nvar_dump($bi == $bi_clone);\n$bi->setText('foobar');\n$bi_clone = clone $bi;\nvar_dump(get_class($bi), get_class($bi_clone));\nvar_dump($bi == $bi_clone);\n?>")).toMatchSnapshot();
  });
});
