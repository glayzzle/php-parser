// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_036.phpt
  it("SPL: CachingIterator and __toString and flags = 0", function () {
    expect(parser.parseCode("<?php\nfunction test($it)\n{\n    foreach($it as $v)\n    {\n        var_dump((string)$it);\n    }\n}\n$ar = new ArrayIterator(array(1, 2, 3));\ntest(new CachingIterator($ar, 0));\n?>\n===DONE===")).toMatchSnapshot();
  });
});
