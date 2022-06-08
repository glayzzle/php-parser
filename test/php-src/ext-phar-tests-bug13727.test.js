// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug13727.phpt
  it("Phar: SLOW TEST bug #13727: \"Number of files in the Phar\" limited to 2042", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$dirName = __DIR__;\n$pname = 'phar://' . $fname;\n$pArchive=\"DataArchive.phar\";\n$p = new Phar($fname, 0, $pArchive);\nfor ($i = 0; $i < 4*1024; $i++){\n    echo(\"$i\\n\");\n    if (!is_dir($fileDir=\"$dirName/test_data\"))\n    mkdir($fileDir, 0777, true);\n    file_put_contents(\"$fileDir/$i\", \"\");\n    $p->addFile(\"$fileDir/$i\", \"$dirName\");\n}\necho(\"\\n Written Files($i)\\n\");\n?>")).toMatchSnapshot();
  });
});
