// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/gh8121.phpt
  it("GH-8121 (SplFileObject - seek and key with csv file inconsistent)", function () {
    expect(parser.parseCode("<?php\n$flagss = [\n    SplFileObject::READ_AHEAD | SplFileObject::READ_CSV | SplFileObject::SKIP_EMPTY | SplFileObject::DROP_NEW_LINE,\n    SplFileObject::READ_AHEAD |                           SplFileObject::SKIP_EMPTY | SplFileObject::DROP_NEW_LINE,\n                                                          SplFileObject::SKIP_EMPTY | SplFileObject::DROP_NEW_LINE,\n];\nforeach ($flagss as $flags) {\n    $file = new SplFileObject(__DIR__ . \"/gh8121.csv\", \"r\");\n    echo \"flags: $flags\\n\";\n    $file->setFlags($flags);\n    $file->seek(0);\n    var_dump($file->key());\n    $file->seek(1);\n    var_dump($file->key());\n    $file->seek(2);\n    var_dump($file->key());\n    $file->seek(3);\n    var_dump($file->key());\n}\n?>")).toMatchSnapshot();
  });
});
