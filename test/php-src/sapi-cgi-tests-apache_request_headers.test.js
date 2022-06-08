// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/apache_request_headers.phpt
  it("apache_request_headers() stack overflow.", function () {
    expect(parser.parseCode("<?php\ninclude \"include.inc\";\n$php = get_cgi_path();\nreset_env_vars();\n$file = __DIR__.\"/012.test.php\";\nfile_put_contents($file, '<?php print_r(apache_request_headers()); ?>');\npassthru(\"$php -n $file\");\n$names = array('HTTP_X_TEST', 'HTTP_X__TEST', 'HTTP_X_');\nforeach ($names as $name) {\n    putenv($name.\"=\".str_repeat(\"A\", 256));\n    passthru(\"$php -n -q $file\");\n    putenv($name);\n}\nunlink($file);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
