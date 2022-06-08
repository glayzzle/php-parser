// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_008.phpt
  it("SPL: ArrayIterator and foreach reference", function () {
    expect(parser.parseCode("<?php\n$arr = array(0=>0, 1=>1, 2=>2);\n$obj = new ArrayObject($arr);\nforeach($obj as $ak=>&$av) {\n    foreach($obj as $bk=>&$bv) {\n        if ($ak==0 && $bk==0) {\n            $bv = \"modify\";\n        }\n        echo \"$ak=>$av - $bk=>$bv\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
