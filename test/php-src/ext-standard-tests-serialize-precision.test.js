// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/precision.phpt
  it("Default precision is sufficient to serialize all the information in floats", function () {
    expect(parser.parseCode("<?php\n$numbers = array(\n    \"0000000000000000\", //0\n    \"2d431cebe2362a3f\", //.0002\n    \"2e431cebe2362a3f\", //.0002 + 10^-Accuracy[.0002]*1.01\n    \"0000000000001000\", //2^-1022. (minimum normal double)\n    \"0100000000001000\", //2^-1022. + 10^-Accuracy[2^-1022.]*1.01\n    \"ffffffffffffef7f\", //2^1024. (maximum normal double)\n    \"feffffffffffef7f\", //2^1024. - 10^-Accuracy[2^1024.]\n    \"0100000000000000\", //minimum subnormal double\n    \"0200000000000000\", //2nd minimum subnormal double\n    \"fffffffffffff000\", //maximum subnormal double\n    \"fefffffffffff000\", //2nd maximum subnormal double\n    \"0000000000000f7f\", //+inf\n    \"0000000000000fff\", //-inf\n);\nforeach ($numbers as $ns) {\n    $num = unpack(\"d\", pack(\"H*\", $ns)); $num = reset($num);\n    echo \"number: \", sprintf(\"%.17e\", $num), \"... \";\n    $num2 = unserialize(serialize($num));\n    $repr = unpack(\"H*\", pack(\"d\", $num2)); $repr = reset($repr);\n    if ($repr == $ns)\n        echo \"OK\\n\";\n    else\n        echo \"mismatch\\n\\twas:    $ns\\n\\tbecame: $repr\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
