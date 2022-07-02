// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/proc_open_redirect.phpt
  it("Redirection support in proc_open", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\ntry {\n    proc_open([$php], [['redirect']], $pipes);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    proc_open([$php], [['redirect', 'foo']], $pipes);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    proc_open([$php], [['redirect', 42]], $pipes);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"\\nWith pipe:\\n\";\n$cmd = [$php, '-r', 'echo \"Test\\n\"; fprintf(STDERR, \"Error\");'];\n$proc = proc_open($cmd, [1 => ['pipe', 'w'], 2 => ['redirect', 1]], $pipes);\nvar_dump($pipes);\nvar_dump(stream_get_contents($pipes[1]));\nproc_close($proc);\necho \"\\nWith filename:\\n\";\n$fileName = __DIR__ . '/proc_open_redirect.txt';\n$proc = proc_open($cmd, [1 => ['file', $fileName, 'w'], 2 => ['redirect', 1]], $pipes);\nvar_dump($pipes);\nproc_close($proc);\nvar_dump(file_get_contents($fileName));\nunlink($fileName);\necho \"\\nWith file:\\n\";\n$file = fopen($fileName, 'w');\n$proc = proc_open($cmd, [1 => $file, 2 => ['redirect', 1]], $pipes);\nvar_dump($pipes);\nproc_close($proc);\nfclose($file);\nvar_dump(file_get_contents($fileName));\nunlink($fileName);\necho \"\\nWith inherited stdout:\\n\";\n$proc = proc_open($cmd, [2 => ['redirect', 1]], $pipes);\nproc_close($proc);\n?>")).toMatchSnapshot();
  });
});
