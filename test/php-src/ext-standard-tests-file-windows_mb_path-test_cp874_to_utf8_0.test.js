// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp874_to_utf8_0.phpt
  it("Thai UTF-8 basic test", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp874\n#vim: set encoding=cp874\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$names = array( /* cp874 */\n    \"�������跴�ͺ1\",\n    \"�������跴�ͺ2\",\n    \"�������跴�ͺ3\",\n    \"�������跴�ͺ4\",\n    \"�������跴�ͺ5\",\n    \"�������跴�ͺ6\",\n    \"�������跴�ͺ7\",\n    \"�������跴�ͺ8\",\n    \"�������跴�ͺ8 10\",\n);\n$i = 0;\nforeach ($names as $name) {\n    $pathw = __DIR__ . DIRECTORY_SEPARATOR . iconv('cp874', 'utf-8', $name) . \".txt\";\n    file_put_contents($pathw, \"hello\" . $i++);\n    get_basename_with_cp($pathw, 65001);\n    var_dump(file_get_contents($pathw));\n    unlink($pathw);\n}\n?>")).toMatchSnapshot();
  });
});
