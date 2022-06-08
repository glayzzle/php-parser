// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug65559.phpt
  it("Bug #65559 (cache not cleared if changes occur while running)", function () {
    expect(parser.parseCode("<?php\n$file =  __DIR__ . \"/bug6559.inc.php\";\nfile_put_contents($file, '<?php return 1;');\n$var = include $file;\nvar_dump($var);\nfile_put_contents($file, '<?php return 2;');\n$var = include $file;\nvar_dump($var);\n@unlink($file);\n?>")).toMatchSnapshot();
  });
});
