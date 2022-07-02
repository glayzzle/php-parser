// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/flock.phpt
  it("flock() tests", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__.\"/flock.dat\";\n$fp = fopen($file, \"w\");\nfclose($fp);\ntry {\n    var_dump(flock($fp, LOCK_SH|LOCK_NB));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$fp = fopen($file, \"w\");\nvar_dump(flock($fp, LOCK_SH|LOCK_NB));\nvar_dump(flock($fp, LOCK_UN));\nvar_dump(flock($fp, LOCK_EX));\nvar_dump(flock($fp, LOCK_UN));\n$would = array(1,2,3);\nvar_dump(flock($fp, LOCK_SH|LOCK_NB, $would));\nvar_dump($would);\nvar_dump(flock($fp, LOCK_UN, $would));\nvar_dump($would);\nvar_dump(flock($fp, LOCK_EX, $would));\nvar_dump($would);\nvar_dump(flock($fp, LOCK_UN, $would));\nvar_dump($would);\nvar_dump(flock($fp, -1));\ntry {\n    var_dump(flock($fp, 0));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
