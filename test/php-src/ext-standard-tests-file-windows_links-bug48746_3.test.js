// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_links/bug48746_3.phpt
  it("Bug#48746 - Junction not working properly", function () {
    expect(parser.parseCode("<?php\ninclude_once __DIR__ . '/common.inc';\n$old_dir = __DIR__;\n$dirname = __DIR__ . \"\\\\mnt\\\\test\\\\directory\";\nexec(\"mkdir \" . $dirname, $output, $ret_val);\nchdir(__DIR__ . \"\\\\mnt\\\\test\");\nexec(get_junction().\" junction directory\", $output, $ret_val);\nfile_put_contents(\"junction\\\\a.php\", \"<?php echo \\\"I am included.\\n\\\" ?>\");\nfile_put_contents(\"junction\\\\b.php\", \"<?php echo \\\"I am included.\\n\\\" ?>\");\ninclude \"junction/a.php\";\nrequire_once \"junction\\\\b.php\";\nprint_r(scandir(\"junction\"));\nunlink(\"junction\\\\a.php\");\nunlink(\"junction\\\\b.php\");\nchdir($old_dir);\nrmdir(__DIR__ . \"\\\\mnt\\\\test\\\\directory\");\nrmdir(__DIR__ . \"\\\\mnt\\\\test\\\\junction\");\nrmdir(__DIR__ . \"\\\\mnt\\\\test\");\nrmdir(__DIR__ . \"\\\\mnt\");\n?>")).toMatchSnapshot();
  });
});
