// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/011.phpt
  it("header_remove()", function () {
    expect(parser.parseCode("<?php\ninclude \"include.inc\";\n$php = get_cgi_path();\nreset_env_vars();\n$f = tempnam(sys_get_temp_dir(), 'cgitest');\nfunction test($script) {\n    file_put_contents($GLOBALS['f'], $script);\n    $cmd = escapeshellcmd($GLOBALS['php']);\n    $cmd .= ' -n -dreport_zend_debug=0 -dhtml_errors=0 ' . escapeshellarg($GLOBALS['f']);\n    echo \"----------\\n\";\n    echo rtrim($script) . \"\\n\";\n    echo \"----------\\n\";\n    passthru($cmd);\n}\ntest('<?php ?>');\ntest('<?php header_remove(); ?>');\ntest('<?php header_remove(\"X-Foo\"); ?>');\ntest('<?php\nheader(\"X-Foo: Bar\");\n?>');\ntest('<?php\nheader(\"X-Foo: Bar\");\nheader(\"X-Bar: Baz\");\nheader_remove(\"X-Foo\");\n?>');\ntest('<?php\nheader(\"X-Foo: Bar\");\nheader_remove(\"X-Foo: Bar\");\n?>');\ntest('<?php\nheader(\"X-Foo: Bar\");\nheader_remove(\"X-Foo:\");\n?>');\ntest('<?php\nheader(\"X-Foo: Bar\");\nheader_remove();\n?>');\ntest('<?php\nheader_remove(\"\");\n?>');\ntest('<?php\nheader_remove(\":\");\n?>');\ntest('<?php\nheader(\"X-Foo: Bar\");\necho \"flush\\n\";\nflush();\nheader_remove(\"X-Foo\");\n?>');\n@unlink($f);\n?>")).toMatchSnapshot();
  });
});
