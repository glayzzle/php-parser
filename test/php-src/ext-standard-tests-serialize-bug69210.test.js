// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug69210.phpt
  it("serialize() integrity with non string on __sleep", function () {
    expect(parser.parseCode("<?php\nclass testString\n{\n    public $a = true;\n    public function __sleep()\n    {\n        return array('a', '1');\n    }\n}\nclass testInteger\n{\n    public $a = true;\n    public function __sleep()\n    {\n        return array('a', 1);\n    }\n}\n$cs = new testString();\n$ci = new testInteger();\n$ss =  @serialize($cs);\necho $ss . \"\\n\";\n$si = @serialize($ci);\necho $si . \"\\n\";\nvar_dump(unserialize($ss));\nvar_dump(unserialize($si));\n?>")).toMatchSnapshot();
  });
});
