// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/proc_open_array.phpt
  it("Using proc_open() with a command array (no shell)", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n$ds = [\n    0 => ['pipe', 'r'],\n    1 => ['pipe', 'w'],\n    2 => ['pipe', 'w'],\n];\necho \"Empty command array:\\n\";\ntry {\n    proc_open([], $ds, $pipes);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"\\nNul byte in program name:\\n\";\ntry {\n    proc_open([\"php\\0oops\"], $ds, $pipes);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"\\nNul byte in argument:\\n\";\ntry {\n    proc_open([\"php\", \"array\\0oops\"], $ds, $pipes);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"\\nBasic usage:\\n\";\n$proc = proc_open([$php, '-r', 'echo \"Hello World!\\n\";'], $ds, $pipes);\nfpassthru($pipes[1]);\nproc_close($proc);\nputenv('ENV_1=ENV_1');\n$env = ['ENV_2' => 'ENV_2'];\n$cmd = [$php, '-n', '-r', 'var_dump(getenv(\"ENV_1\"), getenv(\"ENV_2\"));'];\necho \"\\nEnvironment inheritance:\\n\";\n$proc = proc_open($cmd, $ds, $pipes);\nfpassthru($pipes[1]);\nproc_close($proc);\necho \"\\nExplicit environment:\\n\";\n$proc = proc_open($cmd, $ds, $pipes, null, $env);\nfpassthru($pipes[1]);\nproc_close($proc);\necho \"\\nCheck that arguments are correctly passed through:\\n\";\n$args = [\n    \"Simple\",\n    \"White space\\ttab\\nnewline\",\n    '\"Quoted\"',\n    'Qu\"ot\"ed',\n    '\\\\Back\\\\slash\\\\',\n    '\\\\\\\\Back\\\\\\\\slash\\\\\\\\',\n    '\\\\\"Qu\\\\\"ot\\\\\"ed\\\\\"',\n];\n$cmd = [$php, '-r', 'var_export(array_slice($argv, 1));', '--', ...$args];\n$proc = proc_open($cmd, $ds, $pipes);\nfpassthru($pipes[1]);\nproc_close($proc);\n?>")).toMatchSnapshot();
  });
});
