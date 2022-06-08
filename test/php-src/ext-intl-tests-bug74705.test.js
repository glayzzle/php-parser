// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug74705.phpt
  it("Bug #74705 Wrong reflection on Collator::getSortKey", function () {
    expect(parser.parseCode("<?php\n$rm = new ReflectionMethod(Collator::class, 'getSortKey');\nvar_dump($rm->getNumberOfParameters());\nvar_dump($rm->getNumberOfRequiredParameters());\n$rf = new ReflectionFunction('collator_get_sort_key');\nvar_dump($rf->getNumberOfParameters());\nvar_dump($rf->getNumberOfRequiredParameters());\n?>")).toMatchSnapshot();
  });
});
