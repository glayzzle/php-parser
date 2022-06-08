// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_change_size_during_iteration.phpt
  it("SPL: FixedArray: change array size during iteration", function () {
    expect(parser.parseCode("<?php\n$splFixedArray = SplFixedArray::fromArray([\"a\",\"b\",\"c\"]);\n/* Try changing size on first, second, and final iterations, and check what\n * happens in each case */\nforeach ($splFixedArray as $k => $v) {\n  echo \"$k => $v\\n\";\n  if ($k == 0) {\n    $splFixedArray->setSize(2);\n  }\n}\necho \"---\\n\";\n$splFixedArray = SplFixedArray::fromArray([\"a\",\"b\",\"c\"]);\nforeach ($splFixedArray as $k => $v) {\n  echo \"$k => $v\\n\";\n  if ($k == 1) {\n    $splFixedArray->setSize(2);\n  }\n}\necho \"---\\n\";\n$splFixedArray = SplFixedArray::fromArray([\"a\",\"b\",\"c\"]);\nforeach ($splFixedArray as $k => $v) {\n  echo \"$k => $v\\n\";\n  if ($k == 2) {\n    $splFixedArray->setSize(2);\n  }\n}\necho \"\\n\";")).toMatchSnapshot();
  });
});
