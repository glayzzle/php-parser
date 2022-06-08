// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_caching_iterator_constructor_flags.phpt
  it("SPL: CachingInterator constructor flag checks", function () {
    expect(parser.parseCode("<?php\n  //line 681 ...\n  $array = array(array(7,8,9),1,2,3,array(4,5,6));\n$arrayIterator = new ArrayIterator($array);\nnew CachingIterator($arrayIterator, 0); /* TODO Should this throw? */\nnew CachingIterator($arrayIterator, CachingIterator::CALL_TOSTRING);\nnew CachingIterator($arrayIterator, CachingIterator::TOSTRING_USE_KEY);\nnew CachingIterator($arrayIterator, CachingIterator::TOSTRING_USE_CURRENT);\nnew CachingIterator($arrayIterator, CachingIterator::TOSTRING_USE_INNER);\ntry {\n    $test = new CachingIterator($arrayIterator, 3); // this throws an exception\n} catch (\\ValueError $e){\n  print  $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
