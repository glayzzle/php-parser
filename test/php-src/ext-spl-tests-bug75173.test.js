// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug75173.phpt
  it("Bug #75173 incorrect behavior of AppendIterator::append in foreach loop", function () {
    expect(parser.parseCode("<?php\n$it = new \\AppendIterator();\n$it->append(new ArrayIterator(['foo']));\nforeach ($it as $item) {\n    var_dump($item);\n    if ('foo' === $item) {\n        $it->append(new ArrayIterator(['bar']));\n    }\n}\n?>")).toMatchSnapshot();
  });
});
