// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/009.phpt
  it("path info request without exported PATH_INFO", function () {
    expect(parser.parseCode("<?php\ninclude \"include.inc\";\n$php = get_cgi_path();\nreset_env_vars();\n$f = tempnam(sys_get_temp_dir(), 'cgitest');\nputenv(\"TRANSLATED_PATH=\".$f.\"/x\");\nputenv(\"SCRIPT_FILENAME=\".$f.\"/x\");\nfile_put_contents($f, '<?php var_dump($_SERVER[\"TRANSLATED_PATH\"]); ?>');\necho (`$php -n $f`);\necho \"Done\\n\";\n@unlink($f);\n?>")).toMatchSnapshot();
  });
});
