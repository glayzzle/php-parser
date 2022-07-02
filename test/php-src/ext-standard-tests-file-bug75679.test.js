// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug75679.phpt
  it("Bug #75679 Path 260 character problem", function () {
    expect(parser.parseCode("<?php\n$d = __DIR__;\n$Files2Report =\n [\n  str_pad ($d . '/' . str_repeat (str_pad ('bug75679_path_259_characters_long_', 100, '_') . '/', 1), 259, '_') => [],\n  str_pad ($d . '/' . str_repeat (str_pad ('bug75679_path_260_characters_long_', 100, '_') . '/', 1), 260, '_') => [],\n  str_pad ($d . '/' . str_repeat (str_pad ('bug75679_path_261_characters_long_', 100, '_') . '/', 1), 261, '_') => [],\n ];\nforeach ($Files2Report as $file => &$Report)\n {\n  $Report = ['strlen' => strlen ($file), 'result' => 'nok'];\n  if (! is_dir (dirname ($file))) mkdir (dirname ($file), 0777, true);\n  if (copy (__FILE__, $file) && is_file ($file))\n   {\n    $Report['result'] = 'ok';\n   }\n  print_r ($Report);\n }\n?>")).toMatchSnapshot();
  });
});
