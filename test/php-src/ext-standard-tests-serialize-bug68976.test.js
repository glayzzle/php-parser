// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug68976.phpt
  it("Bug #68976 Use After Free Vulnerability in unserialize()", function () {
    expect(parser.parseCode("<?php\nclass evilClass {\n    public $name;\n    function __wakeup() {\n        unset($this->name);\n    }\n}\n$fakezval = pack(\n    'IIII',\n    0x00100000,\n    0x00000400,\n    0x00000000,\n    0x00000006\n);\n$data = unserialize('a:2:{i:0;O:9:\"evilClass\":1:{s:4:\"name\";a:2:{i:0;i:1;i:1;i:2;}}i:1;R:4;}');\nfor($i = 0; $i < 5; $i++) {\n    $v[$i] = $fakezval.$i;\n}\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
