// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_running.phpt
  it("Phar: Phar::running()", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$phar = new Phar($fname);\n$phar['index.php'] = '<?php\nvar_dump(Phar::running());\nvar_dump(Phar::running(false));\n?>';\ninclude $pname . '/index.php';\nvar_dump(Phar::running());\n?>")).toMatchSnapshot();
  });
});
