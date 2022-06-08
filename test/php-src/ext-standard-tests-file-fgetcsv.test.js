// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fgetcsv.phpt
  it("various fgetcsv() functionality tests", function () {
    expect(parser.parseCode("<?php\n    $list = array(\n        'aaa,bbb',\n        'aaa,\"bbb\"',\n        '\"aaa\",\"bbb\"',\n        'aaa,bbb',\n        '\"aaa\",bbb',\n        '\"aaa\",   \"bbb\"',\n        ',',\n        'aaa,',\n        ',\"aaa\"',\n        '\"\",\"\"',\n        '\"\\\\\"\",\"aaa\"',\n        '\"\"\"\"\"\",',\n        '\"\"\"\"\",aaa' . \"\\n\",\n        '\"\\\\\"\"\",aaa' . \"\\n\",\n        'aaa,\"\\\\\"bbb,ccc' . \"\\n\",\n        'aaa,bbb   ',\n        'aaa,\"bbb   \"',\n        'aaa\"aaa\",\"bbb\"bbb',\n        'aaa\"aaa\"\"\",bbb',\n        'aaa\"\\\\\"a\",\"bbb\"',\n        'aaa,\"bbb' . \"\\n\",\n        'aaa,\"bbb',\n    );\n    $file = __DIR__ . '/fgetcsv.csv';\n    @unlink($file);\n    foreach ($list as $v) {\n        $fp = fopen($file, \"w\");\n        fwrite($fp, $v);\n        fclose($fp);\n        var_dump(fgetcsv(fopen($file, \"r\"), 1024));\n    }\n    @unlink($file);\n?>")).toMatchSnapshot();
  });
});
