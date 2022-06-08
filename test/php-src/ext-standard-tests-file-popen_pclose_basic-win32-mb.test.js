// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/popen_pclose_basic-win32-mb.phpt
  it("Test popen() and pclose function: basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing popen(): reading from the pipe ***\\n\";\n$file_path = __DIR__;\n$string = \"Sample String 私はガラスを食べられます\";\n$file_handle = popen(\" echo $string\", \"r\");\nfpassthru($file_handle);\npclose($file_handle);\necho \"*** Testing popen(): writing to the pipe ***\\n\";\n$arr = array(\"ggg\", \"ddd\", \"aaa\", \"sss\");\n// popen(\"sort\", \"w\") fails if variables_order=\"GPCS\"\n// this is set in the default INI file\n// it doesn't seem to be changeable in the--INI-- section\n//\talso, doing: ini_set('variables_order', ''); doesn't work!\n//\n// the only solution is to either put the absolute path here, or\n// remove variables_order= from PHP.ini (setting it in run-test's\n// default INI will fail too)\n//\n// since we can't depend on PHP.ini being set a certain way,\n// have to put the absolute path here.\n$sysroot = exec('echo %SYSTEMROOT%');\n$file_handle = popen(\"$sysroot/system32/sort\", \"w\");\n$newline = \"\\n\";\nforeach($arr as $str) {\n  fwrite($file_handle, (binary)$str);\n  fwrite($file_handle, (binary)(binary)(binary)(binary)(binary)(binary)(binary)(binary)(binary)$newline);\n}\npclose($file_handle);\necho \"*** Testing popen() and pclose(): return type ***\\n\";\n$return_value_popen = popen(\"echo $string\", \"r\");\nfpassthru($return_value_popen);\nvar_dump( is_resource($return_value_popen) );\n$return_value_pclose = pclose($return_value_popen);\nvar_dump( is_int($return_value_pclose) );\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
