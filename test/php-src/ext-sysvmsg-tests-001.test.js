// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sysvmsg/tests/001.phpt
  it("send/receive serialized message.", function () {
    expect(parser.parseCode("<?php\n$key = ftok(__DIR__ . \"/001.phpt\", \"p\");\n$q = msg_get_queue($key);\nmsg_send($q, 1, \"hello\") or print \"FAIL\\n\";\n$type = null;\nif (msg_receive($q, 0, $type, 1024, $message)) {\n    echo \"TYPE: $type\\n\";\n    echo \"DATA: $message\\n\";\n}\nif (!msg_remove_queue($q)) {\n    echo \"BAD: queue removal failed\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
