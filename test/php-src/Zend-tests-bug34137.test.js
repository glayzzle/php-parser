// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34137.phpt
  it("Bug #34137 (assigning array element by reference causes binary mess)", function () {
    expect(parser.parseCode("<?php\n$arr1 = array('a1' => array('alfa' => 'ok'));\n$arr1 =& $arr1['a1'];\necho '-'.$arr1['alfa'].\"-\\n\";\n?>")).toMatchSnapshot();
  });
});
