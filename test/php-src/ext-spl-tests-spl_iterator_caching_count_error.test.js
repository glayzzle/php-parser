// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_iterator_caching_count_error.phpt
  it("SPL: Caching iterator count() cache failure", function () {
    expect(parser.parseCode("<?php\n$i = new ArrayIterator(array(1,1,1,1,1));\n$i = new CachingIterator($i);\ntry {\n  $i->count();\n  echo \"Should have caused an exception\";\n} catch (BadMethodCallException $e) {\n  echo \"Exception raised\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
