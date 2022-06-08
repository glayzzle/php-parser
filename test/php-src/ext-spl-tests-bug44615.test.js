// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug44615.phpt
  it("SPL: RecursiveArrayIterator bug 44615", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass();\n$array = array(array('z',$a),array('q','s'));\n$rai = new RecursiveArrayIterator($array,RecursiveArrayIterator::CHILD_ARRAYS_ONLY);\nforeach (new RecursiveIteratorIterator($rai) as $t) {\n    var_dump($t);\n}\necho \"Second:\\n\";\n$rai = new RecursiveArrayIterator($array);\nforeach (new RecursiveIteratorIterator($rai) as $t) {\n    var_dump($t);\n}\n?>")).toMatchSnapshot();
  });
});
