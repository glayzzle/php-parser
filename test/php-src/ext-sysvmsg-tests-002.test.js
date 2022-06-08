// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sysvmsg/tests/002.phpt
  it("msg_receive() should return false when unserialize() failed", function () {
    expect(parser.parseCode("<?php\n$queue = msg_get_queue (ftok(__FILE__, 'r'), 0600);\nif (!msg_send ($queue, 1, 'Hi', false /* ! no_ser*/, true/*block*/, $msg_err)) {\n    die(\"error\\n\");\n}\nvar_dump($res = msg_receive ($queue, 1, $msg_type, 16384, $msg, true, 0, $msg_error));\nif (!msg_remove_queue($queue)) {\n    echo \"BAD: queue removal failed\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
