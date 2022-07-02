// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/php_strip_whitespace.phpt
  it("php_strip_whitespace() tests", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/php_strip_whitespace.dat\";\nvar_dump(php_strip_whitespace($filename));\n$data = '/* test comment */';\nfile_put_contents($filename, $data);\nvar_dump(php_strip_whitespace($filename));\n$data = '<?php /* test comment */ ?>';\nfile_put_contents($filename, $data);\nvar_dump(php_strip_whitespace($filename));\n$data = '<?php\n/* test class */\nclass test {\n    /* function foo () */\n    function foo () /* {{{ */\n    {\n        echo $var; //does not exist\n    }\n    /* }}} */\n}\n?>';\nfile_put_contents($filename, $data);\nvar_dump(php_strip_whitespace($filename));\n@unlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
