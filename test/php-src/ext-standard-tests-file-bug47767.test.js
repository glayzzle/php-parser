// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug47767.phpt
  it("bug #47767 (include_once does not resolve windows symlinks or junctions)", function () {
    expect(parser.parseCode("<?php\necho \"Testing include_once using file symbolic link\\n\";\n$filename = __DIR__ . '\\\\a.php';\n$content = '<?php echo \"I am included\\n\" ?>';\nfile_put_contents($filename, $content);\n$softlinkname = __DIR__ . '\\\\a_slink.php';\nsymlink($filename, $softlinkname);\ninclude_once(\"$filename\");\ninclude_once(\"$softlinkname\");\ninclude_once(\"$softlinkname\");\necho \"Testing include_once using directory symbolic link\\n\";\n$softdirlinkname = __DIR__ . \"\\\\a_dir\";\nsymlink(__DIR__, $softdirlinkname);\ninclude_once(\"$softdirlinkname\" . '\\\\a.php');\necho \"Testing include_once using junction points\\n\";\n$junctionname = __DIR__ . '\\\\a_jdir';\nexec(\"mklink /J $junctionname \" . __DIR__);\ninclude_once(\"$junctionname\" . '\\\\a.php');\nunlink($filename);\nunlink($softlinkname);\nrmdir($softdirlinkname);\nrmdir($junctionname);\n?>")).toMatchSnapshot();
  });
});
