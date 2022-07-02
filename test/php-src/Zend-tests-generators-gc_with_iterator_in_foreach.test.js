// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/gc_with_iterator_in_foreach.phpt
  it("Generator GC triggered with live iterator in foreach", function () {
    expect(parser.parseCode("<?php\nfunction gen($iter, &$gen) {\n    foreach ($iter as $v) {\n        yield;\n    }\n}\n$iter = new ArrayIterator([1, 2, 3]);\n$gen = gen($iter, $gen);\n$gen->next();\nunset($gen);\ngc_collect_cycles();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
