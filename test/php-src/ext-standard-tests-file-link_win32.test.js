// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/link_win32.phpt
  it("link not working properly on Windows", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . '\\\\a.php';\n$content = '<?php echo \"Dummy Content.\\n\" ?>';\nfile_put_contents($filename, $content);\n$linkname = __DIR__ . '\\\\a_link.php';\nlink(\"$filename\", \"$linkname\");\nvar_dump(file_exists(\"$linkname\"));\n$linkcontent = file_get_contents($linkname);\nvar_dump($content == $linkcontent);\nunlink($filename);\nunlink($linkname);\n?>")).toMatchSnapshot();
  });
});
