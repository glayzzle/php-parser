// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sysvmsg/tests/003.phpt
  it("msg_queue_exists()", function () {
    expect(parser.parseCode("<?php\n$id = ftok(__FILE__, 'r');\nmsg_remove_queue(msg_get_queue($id, 0600));\nvar_dump(msg_queue_exists($id));\n$res = msg_get_queue($id, 0600);\nvar_dump($res);\nvar_dump(msg_queue_exists($id));\nvar_dump(msg_remove_queue($res));\nvar_dump(msg_queue_exists($id));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
