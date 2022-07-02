// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/__serialize_003.phpt
  it("__serialize() mechanism (003): Interoperability of different serialization mechanisms", function () {
    expect(parser.parseCode("<?php\nclass Test implements Serializable {\n    public function __sleep() {\n        echo \"__sleep() called\\n\";\n    }\n    public function __wakeup() {\n        echo \"__wakeup() called\\n\";\n    }\n    public function __serialize() {\n        echo \"__serialize() called\\n\";\n        return [\"key\" => \"value\"];\n    }\n    public function __unserialize(array $data) {\n        echo \"__unserialize() called\\n\";\n        var_dump($data);\n    }\n    public function serialize() {\n        echo \"serialize() called\\n\";\n        return \"payload\";\n    }\n    public function unserialize($payload) {\n        echo \"unserialize() called\\n\";\n        var_dump($payload);\n    }\n}\n$test = new Test;\nvar_dump($s = serialize($test));\nvar_dump(unserialize($s));\nvar_dump(unserialize('C:4:\"Test\":7:{payload}'));\n?>")).toMatchSnapshot();
  });
});
