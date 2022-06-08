// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug_bits.phpt
  it("Bug (Incorrectly decoding bit values / Malformed server packet. Field length pointing)", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\nif (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n    printf(\"[001] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n}\nif (!$link->query(\"DROP TABLE IF EXISTS bug_bits\")) {\n    printf(\"[002] [%d] %s\\n\", $link->errno, $link->error);\n}\nif (!$link->query(\"CREATE TABLE `bug_bits` (`inty` bigint(20) unsigned NOT NULL DEFAULT '0', `bitty` bit(64) NOT NULL DEFAULT b'0')\")) {\n    printf(\"[003] [%d] %s\\n\", $link->errno, $link->error);\n}\n$insertQuery = \"INSERT INTO `bug_bits` VALUES (18446744073709551615, 18446744073709551615)\".\n               \",(18446744073709551614, 18446744073709551614)\".\n               \",(4294967296, 4294967296)\".\n               \",(4294967295, 4294967295)\".\n               \",(2147483648, 2147483648)\".\n               \",(2147483647, 2147483647)\".\n               \",(1, 1)\";\nif (!$link->query($insertQuery)) {\n    printf(\"[004] [%d] %s\\n\", $link->errno, $link->error);\n}\nif (!($res = $link->query(\"SELECT * FROM `bug_bits`\"))) {\n    printf(\"[005] [%d] %s\\n\", $link->errno, $link->error);\n}\nwhile ($row = $res->fetch_assoc()) {\n    var_dump($row);\n}\n$link->close();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
