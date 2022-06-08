// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/regexIterator_setMode_error.phpt
  it("SPL: RegexIterator::setMode() error tests", function () {
    expect(parser.parseCode("<?php\n$array = array('foo', 'bar', 'baz');\n$regexIterator = new RegexIterator(new ArrayIterator($array), \"/f/\");\nvar_dump($regexIterator->getMode());\ntry {\n    $regexIterator->setMode(7);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n    var_dump($e->getCode());\n}\n?>")).toMatchSnapshot();
  });
});
