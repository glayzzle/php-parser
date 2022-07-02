// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug80411.phpt
  it("Bug #80411: References to null-serialized object break serialize()", function () {
    expect(parser.parseCode("<?php\nclass UnSerializable implements Serializable\n{\n  public function serialize() {}\n  public function unserialize($serialized) {}\n}\n$unser = new UnSerializable();\n$arr = [$unser];\n$arr[1] = &$arr[0];\n$arr[2] = 'endcap';\n$arr[3] = &$arr[2];\n$data = serialize($arr);\necho $data . PHP_EOL;\n$recovered = unserialize($data);\nvar_export($recovered);\n?>")).toMatchSnapshot();
  });
});
