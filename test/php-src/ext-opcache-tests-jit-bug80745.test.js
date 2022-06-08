// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug80745.phpt
  it("Bug #80745 (JIT produces Assert failure and UNKNOWN:0 var_dumps in code involving bitshifts)", function () {
    expect(parser.parseCode("<?php\nfinal class Message\n{\n    public $qr = false;\n    public $opcode = 0;\n    public $aa = false;\n}\necho \"Starting...\\n\";\nfunction headerToBinary(Message $message)\n{\n        $flags = 0;\n        $flags = ($flags << 1) | ($message->qr ? 1 : 0);\n        $flags = ($flags << 4) | $message->opcode;\n        var_dump($flags);\n        $flags = ($flags << 1) | ($message->aa ? 1 : 0);\n}\nheaderToBinary(new Message());\necho \"PROBLEM NOT REPRODUCED !\\n\";\n?>")).toMatchSnapshot();
  });
});
