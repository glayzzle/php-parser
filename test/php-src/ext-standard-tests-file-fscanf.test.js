// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fscanf.phpt
  it("fscanf() tests", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/fscanf.dat\";\nfile_put_contents($filename, \"data\");\n$fp = fopen($filename, \"rt\");\nvar_dump(fscanf($fp, \"%d\", $v));\nvar_dump($v);\nfclose($fp);\n$fp = fopen($filename, \"rt\");\nvar_dump(fscanf($fp, \"%s\", $v));\nvar_dump($v);\nfclose($fp);\n$fp = fopen($filename, \"rt\");\ntry {\n    fscanf($fp, \"%s\", $v, $v1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump($v);\nvar_dump($v1);\nfclose($fp);\n$v = array();\n$v1 = array();\n$fp = fopen($filename, \"rt\");\ntry {\n    fscanf($fp, \"\", $v, $v1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump($v);\nvar_dump($v1);\nfclose($fp);\n$v = array();\n$v1 = array();\n$fp = fopen($filename, \"rt\");\ntry {\n    fscanf($fp, \"%.a\", $v, $v1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump($v);\nvar_dump($v1);\nfclose($fp);\n@unlink($filename);\ntouch($filename);\n$fp = fopen($filename, \"rt\");\nvar_dump(fscanf($fp, \"%s\", $v));\nvar_dump($v);\nfclose($fp);\nfile_put_contents($filename, \"data\");\n$fp = fopen($filename, \"rt\");\ntry {\n    var_dump(fscanf($fp, \"%s%d\", $v));\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
