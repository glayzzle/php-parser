// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug66702.phpt
  it("Bug #66702 (RegexIterator inverted result works as expected)", function () {
    expect(parser.parseCode("<?php\n/**\n * @author Joshua Thijssen <jthijssen+php@noxlogic.nl>\n */\n$it = new \\ArrayIterator(array(\"foo\", \"bar\", \"baz\"));\n$it2 = new \\RegexIterator($it, \"/^ba/\", \\RegexIterator::MATCH);\nprint_r(iterator_to_array($it2));\n$it2 = new \\RegexIterator($it, \"/^ba/\", \\RegexIterator::MATCH, \\RegexIterator::INVERT_MATCH);\nprint_r(iterator_to_array($it2));\n$it = new \\ArrayIterator(array(\"foo\" => 1, \"bar\" => 2, \"baz\" => 3));\n$it2 = new \\RegexIterator($it, \"/^ba/\", \\RegexIterator::MATCH, \\RegexIterator::USE_KEY);\nprint_r(iterator_to_array($it2));\n$it2 = new \\RegexIterator($it, \"/^ba/\", \\RegexIterator::MATCH, \\RegexIterator::USE_KEY | \\RegexIterator::INVERT_MATCH);\nprint_r(iterator_to_array($it2));\n?>")).toMatchSnapshot();
  });
});
