// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sysvmsg/tests/004.phpt
  it("msg_set_queue() and msg_stat_queue()", function () {
    expect(parser.parseCode("<?php\n$id = ftok(__FILE__, 'r');\n$q = msg_get_queue($id);\necho \"Set mode:\\n\";\n$arr = array('msg_perm.mode' => 0600);\nvar_dump(msg_set_queue($q, $arr));\necho \"Did really work:\\n\";\nvar_dump(count(array_diff_assoc($arr, msg_stat_queue($q))) == 0);\necho \"Set uid:\\n\"; // same as the running user to make it succeed\n$arr = array('msg_perm.uid' => getmyuid());\nvar_dump(msg_set_queue($q, $arr));\necho \"Did really work:\\n\";\nvar_dump(count(array_diff_assoc($arr, msg_stat_queue($q))) == 0);\necho \"Set gid:\\n\"; // same as the running user to make it succeed\n$arr = array('msg_perm.gid' => getmygid());\nvar_dump(msg_set_queue($q, $arr));\necho \"Did really work:\\n\";\nvar_dump(count(array_diff_assoc($arr, msg_stat_queue($q))) == 0);\necho \"Set smaller qbytes:\\n\";\n$res = msg_stat_queue($q);\n$arr = array('msg_qbytes' => ($res['msg_qbytes'] -1));\nvar_dump(msg_set_queue($q, $arr));\necho \"Did really work:\\n\";\nvar_dump(count(array_diff_assoc($arr, msg_stat_queue($q))) == 0);\nif (!msg_remove_queue($q)) {\n        echo \"BAD: queue removal failed\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
