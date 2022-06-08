// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sysvmsg/tests/006.phpt
  it("msg_send() data types when not serializing", function () {
    expect(parser.parseCode("<?php\n$queue = msg_get_queue (ftok(__FILE__, 'r'), 0600);\n$tests = array('foo', 123, PHP_INT_MAX +1, true, 1.01, null, array('bar'));\nforeach ($tests as $elem) {\n    echo @\"Sending/receiving '$elem':\\n\";\n    try {\n        var_dump(msg_send($queue, 1, $elem, false));\n    } catch (TypeError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    unset($msg);\n    var_dump(msg_receive($queue, 1, $msg_type, 1024, $msg, false, MSG_IPC_NOWAIT));\n    var_dump($elem == $msg);\n    var_dump($elem === $msg);\n}\nif (!msg_remove_queue($queue)) {\n    echo \"BAD: queue removal failed\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
