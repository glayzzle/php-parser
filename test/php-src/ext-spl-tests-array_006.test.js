// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_006.phpt
  it("SPL: ArrayIterator without ArrayObject", function () {
    expect(parser.parseCode("<?php\necho \"==Normal==\\n\";\n$arr = array(0=>0, 1=>1, 2=>2);\n$obj = new ArrayIterator($arr);\nforeach($obj as $ak=>$av) {\n    foreach($obj as $bk=>$bv) {\n        if ($ak==0 && $bk==0) {\n            $arr[0] = \"modify\";\n        }\n        echo \"$ak=>$av - $bk=>$bv\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
