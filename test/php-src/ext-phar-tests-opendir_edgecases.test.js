// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/opendir_edgecases.phpt
  it("Phar: test edge cases of opendir() function interception", function () {
    expect(parser.parseCode("<?php\nPhar::interceptFileFuncs();\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\ntry {\n    opendir(array());\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nmkdir(__DIR__ . '/opendir_edgecases');\nchdir(__DIR__);\n$a = opendir('opendir_edgecases');\n$arr = array();\nwhile (false !== ($b = readdir($a))) {\n    $arr[] = $b;\n}\nsort($arr);\nforeach ($arr as $b) {\n    echo \"$b\\n\";\n}\nclosedir($a);\nfile_put_contents($pname . '/foo', '<?php\n$context = stream_context_create();\n$a = opendir(\".\", $context);\n$res = array();\nwhile (false !== ($b = readdir($a))) {\n$res[] = $b;\n}\nsort($res);\nforeach ($res as $b) {\necho \"$b\\n\";\n}\nopendir(\"oops\");\n?>');\ninclude $pname . '/foo';\n?>")).toMatchSnapshot();
  });
});
