// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fputcsv.phpt
  it("SplFileObject::fputcsv(): functionality tests", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . '/SplFileObject_fputcsv.csv';\n$fo = new SplFileObject($file, 'w');\n$list = array (\n  0 => 'aaa,bbb',\n  1 => 'aaa,\"bbb\"',\n  2 => '\"aaa\",\"bbb\"',\n  3 => 'aaa,bbb',\n  4 => '\"aaa\",bbb',\n  5 => '\"aaa\",   \"bbb\"',\n  6 => ',',\n  7 => 'aaa,',\n  8 => ',\"aaa\"',\n  9 => '\"\",\"\"',\n  10 => '\"\"\"\"\"\",',\n  11 => '\"\"\"\"\",aaa',\n  12 => 'aaa,bbb   ',\n  13 => 'aaa,\"bbb   \"',\n  14 => 'aaa\"aaa\",\"bbb\"bbb',\n  15 => 'aaa\"aaa\"\"\",bbb',\n  16 => 'aaa,\"\\\\\"bbb,ccc',\n  17 => 'aaa\"\\\\\"a\",\"bbb\"',\n  18 => '\"\\\\\"\",\"aaa\"',\n  19 => '\"\\\\\"\"\",aaa',\n);\nforeach ($list as $v) {\n    $fo->fputcsv(explode(',', $v));\n}\nunset($fo);\n$res = file($file);\nforeach($res as &$val)\n{\n    $val = substr($val, 0, -1);\n}\necho '$list = ';var_export($res);echo \";\\n\";\n$fp = fopen($file, \"r\");\n$res = array();\nwhile($l=fgetcsv($fp))\n{\n    $res[] = join(',',$l);\n}\nfclose($fp);\necho '$list = ';var_export($res);echo \";\\n\";\n?>")).toMatchSnapshot();
  });
});
