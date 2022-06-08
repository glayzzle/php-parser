// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_serialize.phpt
  it("SplFixedArray serialisation", function () {
    expect(parser.parseCode("<?php\n$array = new SplFixedArray(5);\n$obj = new stdClass;\n$obj->prop = 'value';\n$array[0] = 'foo';\n$array[2] = 42;\n$array[3] = $obj;\n$array[4] = range(1, 5);\n$ser = serialize($array);\necho \"$ser\\n\";\n$unser = unserialize($ser);\nprintf(\"count: %d\\n\", count($unser));\nprintf(\"getSize(): %d\\n\", $unser->getSize());\nvar_dump($unser[0], $unser[1], $unser[2], $unser[3], $unser[4]);\n$unser[4] = 'quux';\nvar_dump($unser[4]);\n?>")).toMatchSnapshot();
  });
});
