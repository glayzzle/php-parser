// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/ref_to_failed_serialize.phpt
  it("References to objects for which Serializable::serialize() returned NULL should use N;", function () {
    expect(parser.parseCode("<?php\nclass NotSerializable implements Serializable {\n    public function serialize() {\n        return null;\n    }\n    public function unserialize($serialized) {\n    }\n}\n$obj = new NotSerializable();\n$data = [$obj, $obj];\nvar_dump($s = serialize($data));\nvar_dump(unserialize($s));\n?>")).toMatchSnapshot();
  });
});
