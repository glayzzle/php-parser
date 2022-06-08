// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug74468.phpt
  it("Bug #74468 Wrong reflection on Collator::sortWithSortKeys", function () {
    expect(parser.parseCode("<?php\n$rm = new ReflectionMethod(Collator::class, 'sortWithSortKeys');\nvar_dump($rm->getNumberOfParameters());\nvar_dump($rm->getNumberOfRequiredParameters());\n$rf = new ReflectionFunction('collator_sort_with_sort_keys');\nvar_dump($rf->getNumberOfParameters());\nvar_dump($rf->getNumberOfRequiredParameters());\n?>")).toMatchSnapshot();
  });
});
