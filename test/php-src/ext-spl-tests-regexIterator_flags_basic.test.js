// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/regexIterator_flags_basic.phpt
  it("SPL: RegexIterator::getFlags() and setFlags() basic tests", function () {
    expect(parser.parseCode("<?php\n$array = array('foo', 'bar', 'baz');\n$iterator = new ArrayIterator($array);\n$regexIterator = new RegexIterator($iterator, \"/f/\", RegexIterator::MATCH, RegexIterator::USE_KEY);\nvar_dump($regexIterator->getFlags() === RegexIterator::USE_KEY);\n// Test a change in flags, there's only one class constant so it has to be another int value\n$regexIterator->setFlags(3);\nvar_dump($regexIterator->getFlags() === RegexIterator::USE_KEY);\n$regexIterator->setFlags(RegexIterator::USE_KEY);\nvar_dump($regexIterator->getFlags() === RegexIterator::USE_KEY);\n?>")).toMatchSnapshot();
  });
});
