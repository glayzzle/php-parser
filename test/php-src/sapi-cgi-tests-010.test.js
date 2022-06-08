// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/010.phpt
  it("Bug #45860 (header() function fails to correctly replace all Status lines)", function () {
    expect(parser.parseCode("<?php\ninclude \"include.inc\";\n$php = get_cgi_path();\nreset_env_vars();\n$f = tempnam(sys_get_temp_dir(), 'cgitest');\nputenv(\"TRANSLATED_PATH=\".$f.\"/x\");\nputenv(\"SCRIPT_FILENAME=\".$f.\"/x\");\nfile_put_contents($f, '<?php\nheader(\"HTTP/1.1 403 Forbidden\");\nheader(\"Status: 403 Also Forbidden\");\n?>');\necho (`$php -n $f`);\nfile_put_contents($f, '<?php\nheader(\"HTTP/1.1 403 Forbidden\");\n?>');\necho (`$php -n $f`);\nfile_put_contents($f, '<?php\nheader(\"Status: 403 Also Forbidden\");\n?>');\necho (`$php -n $f`);\necho \"Done\\n\";\n@unlink($f);\n?>")).toMatchSnapshot();
  });
});
