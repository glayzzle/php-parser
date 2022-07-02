// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug70436.phpt
  it("Bug #70436: Use After Free Vulnerability in unserialize()", function () {
    expect(parser.parseCode("<?php\nclass obj implements Serializable\n{\n    var $data;\n    function serialize()\n    {\n        return serialize($this->data);\n    }\n    function unserialize($data)\n    {\n        $this->data = unserialize($data);\n    }\n}\n$fakezval = ptr2str(1122334455);\n$fakezval .= ptr2str(0);\n$fakezval .= \"\\x00\\x00\\x00\\x00\";\n$fakezval .= \"\\x01\";\n$fakezval .= \"\\x00\";\n$fakezval .= \"\\x00\\x00\";\n$inner = 'C:3:\"obj\":3:{rya}';\n$exploit = 'a:4:{i:0;i:1;i:1;C:3:\"obj\":'.strlen($inner).':{'.$inner.'}i:2;s:'.strlen($fakezval).':\"'.$fakezval.'\";i:3;R:5;}';\n$data = unserialize($exploit);\nvar_dump($data);\nfunction ptr2str($ptr)\n{\n    $out = '';\n    for ($i = 0; $i < 8; $i++) {\n        $out .= chr($ptr & 0xff);\n        $ptr >>= 8;\n    }\n    return $out;\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
