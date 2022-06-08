// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_limit_iterator_check_limits.phpt
  it("SPL: LimitIterator check limits are valid", function () {
    expect(parser.parseCode("<?php\n  $array = array(array(7,8,9),1,2,3,array(4,5,6));\n$arrayIterator = new ArrayIterator($array);\ntry {\n  $limitIterator = new LimitIterator($arrayIterator, -1);\n} catch (\\ValueError $e){\n  print $e->getMessage(). \"\\n\";\n}\ntry {\n  $limitIterator = new LimitIterator($arrayIterator, 0, -2);\n} catch (\\ValueError $e){\n  print $e->getMessage() . \"\\n\";\n}\n$limitIterator = new LimitIterator($arrayIterator, 0, -1);\n?>")).toMatchSnapshot();
  });
});
