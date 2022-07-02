// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/run-test/test007.phpt
  it("dirname test", function () {
    expect(parser.parseCode("<?php\n// Allow for either Win32 or Unix.\n$s = dirname(\"/foo\");\n// $s should be either / (Unix) or \\ (Win32)\nfunction check_dirname($path) {\n    global $s;\n    $path1 = str_replace(\"%\",$s,$path);\n    $path2 = dirname($path1);\n    $path3 = str_replace($s,\"%\",$path2);\n    print \"dirname($path) == $path3\\n\";\n}\ncheck_dirname(\"%foo%\");\ncheck_dirname(\"%foo\");\ncheck_dirname(\"%foo%bar\");\ncheck_dirname(\"%\");\ncheck_dirname(\"...%foo\");\ncheck_dirname(\".%foo\");\ncheck_dirname(\"foobar%%%\");\ncheck_dirname(\"%\\0%\\0%\\0.%\\0.\");\nfunction same($a,$b) {\n    if ($a == $b) {\n        print \"OK\\n\";\n    } else {\n        print \"FAIL  $a == $b\\n\";\n    }\n}\nif ('/' == $s) {\n    same(\".\",dirname(\"d:\\\\foo\\\\bar.inc\"));\n    same(\".\",dirname(\"c:\\\\foo\"));\n    same(\".\",dirname(\"c:\\\\\"));\n    same(\".\",dirname(\"c:\"));\n} else {\n    same(\"d:\\\\foo\",dirname(\"d:\\\\foo\\\\bar.inc\"));\n    same(\"c:\\\\\",dirname(\"c:\\\\foo\"));\n    same(\"c:\\\\\",dirname(\"c:\\\\\"));\n    same(\"c:\",dirname(\"c:\"));\n}\n?>")).toMatchSnapshot();
  });
});
