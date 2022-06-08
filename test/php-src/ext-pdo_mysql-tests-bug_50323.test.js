// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_50323.phpt
  it("Bug #50323 (No ability to connect to database named 't;', no chance to escape semicolon)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n    function changeDSN($original, $new_options) {\n        $old_options = array();\n        $dsn = substr($original,\n                strpos($original, ':') + 1,\n                strlen($original));\n        // no real parser - any exotic setting can fool us\n        $parts = explode(';', $dsn);\n        foreach ($parts as $k => $v) {\n            $tmp = explode('=', $v);\n            if (count($tmp) == 2)\n                    $old_options[$tmp[0]] = $tmp[1];\n        }\n        $options = $old_options;\n        foreach ($new_options as $k => $v)\n            $options[$k] = $v;\n        $dsn = 'mysql:';\n        foreach ($options as $k => $v)\n            $dsn .= sprintf('%s=%s;', $k, $v);\n        $dsn = substr($dsn, 0, strlen($dsn) -1);\n        return $dsn;\n    }\nif (1 === @$db->exec('CREATE DATABASE `crazy;dbname`')) {\n    $dsn = changeDSN(getenv('PDOTEST_DSN'), array('dbname' => 'crazy;;dbname'));\n    $user = getenv('PDOTEST_USER');\n    $pass = getenv('PDOTEST_PASS');\n    new PDO($dsn, $user, $pass);\n}\necho 'done!';\n?>")).toMatchSnapshot();
  });
});
