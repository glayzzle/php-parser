// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/regexiterator_getregex.phpt
  it("SPL: RegexIterator::getRegex() basic tests", function () {
    expect(parser.parseCode("<?php\n$array = array('cat', 'hat', 'sat');\n$iterator = new ArrayIterator($array);\n# Simple regex\n$regexIterator = new RegexIterator($iterator, '/.at/');\nvar_dump($regexIterator->getRegex());\n# Empty regular expression\n$regexIterator = new RegexIterator($iterator, '//');\nvar_dump($regexIterator->getRegex());\n# \"Complex\" email regular expression\n$regexIterator = new RegexIterator($iterator, '|\\b[A-Z0-9._%-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}\\b|');\nvar_dump($regexIterator->getRegex());\n?>")).toMatchSnapshot();
  });
});
