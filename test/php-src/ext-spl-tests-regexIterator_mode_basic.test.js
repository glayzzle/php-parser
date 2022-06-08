// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/regexIterator_mode_basic.phpt
  it("SPL: RegexIterator::getMode() and setMode() basic tests", function () {
    expect(parser.parseCode("<?php\n$array = array('foo', 'bar', 'baz');\n$iterator = new ArrayIterator($array);\n$regexIterator = new RegexIterator($iterator, \"/f/\");\nvar_dump($regexIterator->getMode() === RegexIterator::MATCH);\n$regexIterator->setMode(RegexIterator::MATCH);\nvar_dump($regexIterator->getMode() === RegexIterator::MATCH);\n$regexIterator->setMode(RegexIterator::GET_MATCH);\nvar_dump($regexIterator->getMode() === RegexIterator::GET_MATCH);\n$regexIterator->setMode(RegexIterator::ALL_MATCHES);\nvar_dump($regexIterator->getMode() === RegexIterator::ALL_MATCHES);\n$regexIterator->setMode(RegexIterator::SPLIT);\nvar_dump($regexIterator->getMode() === RegexIterator::SPLIT);\n?>")).toMatchSnapshot();
  });
});
