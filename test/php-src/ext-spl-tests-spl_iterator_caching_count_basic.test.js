// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_iterator_caching_count_basic.phpt
  it("SPL: Caching iterator count() cache contents", function () {
    expect(parser.parseCode("<?php\n$i = new ArrayIterator(array(1,1,1,1,1));\n$i = new CachingIterator($i,CachingIterator::FULL_CACHE);\nforeach ($i as $value) {\n  echo $i->count().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
