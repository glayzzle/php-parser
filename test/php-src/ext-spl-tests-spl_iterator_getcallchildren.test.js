// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_iterator_getcallchildren.phpt
  it("SPL: RecursiveIteratorIterator, getCallChildren", function () {
    expect(parser.parseCode("<?php\n  //line 681 ...\n  $array = array(array(7,8,9),1,2,3,array(4,5,6));\n$recursiveArrayIterator = new RecursiveArrayIterator($array);\n$test = new RecursiveIteratorIterator($recursiveArrayIterator);\nvar_dump($test->current());\n$test->next();\nvar_dump($test->current());\ntry {\n  $output = $test->callGetChildren();\n} catch (TypeError $exception) {\n  $output = null;\n  echo $exception->getMessage() . \"\\n\";\n}\nvar_dump($output);\n?>")).toMatchSnapshot();
  });
});
