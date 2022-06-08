// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sysvmsg/tests/005.phpt
  it("sysvmsg functions on non-existing queue", function () {
    expect(parser.parseCode("<?php\n$tests = array(null, 'foo');\nforeach ($tests as $i => $q) {\n    if ($q === null) {\n        do {\n            $id = ftok(__FILE__, chr(mt_rand(0, 255))); } while (msg_queue_exists($id));\n    }\n    $q = msg_get_queue($id) or die(\"Failed to create queue\");\n    msg_remove_queue($q) or die(\"Failed to close queue\");\n    echo \"Iteration \" . ($i + 1) . \":\\n\";\n    $errno = 0;\n    var_dump(msg_set_queue($q, array('msg_qbytes' => 1)));\n    var_dump(msg_stat_queue($q));\n    var_dump(msg_receive($q, 0, $null, 1, $msg, true, 0, $errno));\n    var_dump($errno != 0);\n    // again, but triggering an exception\n    try {\n        msg_receive($q, 0, $null, 0, $msg);\n    } catch (ValueError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    var_dump(msg_send($q, 1, 'foo', true, true, $errno));\n    var_dump($errno != 0);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
