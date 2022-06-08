// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/parse_ini_file_variation3.phpt
  it("Test parse_ini_file() function : variation: include path searching", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing parse_ini_file() : variation ***\\n\";\n$pwd = getcwd();\n$f = \"parse_ini_file_variation3\";\n$dir1 = $pwd.\"/\".$f.\".dir1\";\n$dir2 = $pwd.\"/\".$f.\".dir2\";\n$dir3 = $pwd.\"/\".$f.\".dir3\";\n$iniFile = \"php.ini\";\n$newdirs = array($dir1, $dir2, $dir3);\n$pathSep = \":\";\n$newIncludePath = \"\";\nif(substr(PHP_OS, 0, 3) == 'WIN' ) {\n   $pathSep = \";\";\n}\nforeach($newdirs as $newdir) {\n   mkdir($newdir);\n   $newIncludePath .= $newdir.$pathSep;\n}\nset_include_path($newIncludePath);\n$path = get_include_path();\necho \"New include path is : \" . $path . \"\\n\";\n$output_file = $dir2.\"/\".$iniFile;\n$iniContent = <<<FILE\nerror_reporting  =  E_ALL\ndisplay_errors = On\ndisplay_startup_errors = Off\nlog_errors = Off\nignore_repeated_errors = Off\nignore_repeated_source = Off\nreport_memleaks = On\ndocref_root = \"/phpmanual/\"\ndocref_ext = .html\nFILE;\nfile_put_contents($output_file, $iniContent);\nvar_dump(parse_ini_file($iniFile));\n?>")).toMatchSnapshot();
  });
});
