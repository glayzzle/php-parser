// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/002.phpt
  it("defining INI options with -d", function () {
    expect(parser.parseCode("<?php\ninclude \"include.inc\";\n$php = get_cgi_path();\nreset_env_vars();\n$file = __DIR__.\"/002.test.php\";\nfile_put_contents($file, '<?php var_dump(ini_get(\"max_execution_time\")); ?>');\nvar_dump(`$php -n -d max_execution_time=111 $file`);\nvar_dump(`$php -n -d max_execution_time=500 $file`);\nvar_dump(`$php -n -d max_execution_time=500 -d max_execution_time=555 $file`);\nfile_put_contents($file, '<?php var_dump(ini_get(\"max_execution_time\")); var_dump(ini_get(\"upload_tmp_dir\")); ?>');\nvar_dump(`$php -n -d upload_tmp_dir=/test/path -d max_execution_time=555 $file`);\nunlink($file);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
