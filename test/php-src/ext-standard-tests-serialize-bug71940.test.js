// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug71940.phpt
  it("Bug #71940 (Unserialize crushes on restore object reference)", function () {
    expect(parser.parseCode("<?php\nclass Identity\n{\n    private $role;\n    public function __construct($role)\n    {\n        $this->role = $role;\n    }\n}\nclass Entry implements \\Serializable\n{\n    private $identity;\n    public function __construct(Identity $identity)\n    {\n        $this->identity = $identity;\n    }\n    public function serialize()\n    {\n        return serialize(array($this->identity));\n    }\n    public function unserialize($serialized)\n    {\n        list($this->identity) = unserialize($serialized);\n    }\n}\n$identity = new Identity('test');\n$identityRef = &$identity;\n$entry1 = new Entry($identity);\n$entry2 = new Entry($identityRef);\n$serialized = serialize([$entry1, $entry2]);\nprint_r(unserialize($serialized));\n?>")).toMatchSnapshot();
  });
});
