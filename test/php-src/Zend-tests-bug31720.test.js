// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug31720.phpt
  it("Bug #31720 (Invalid object callbacks not caught in array_walk())", function () {
    expect(parser.parseCode("<?php\n$array = array('at least one element');\ntry {\n    array_walk($array, array($nonesuchvar,'show'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
