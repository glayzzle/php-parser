// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/recursive_it.phpt
  it("RecursiveDirectoryIterator with dir path long or of edge case length", function () {
    expect(parser.parseCode("<?php\n$need_len = 1024;\n//$need_len = 259;\n$dir = __DIR__;\nwhile ($need_len - strlen($dir) > 32) {\n    $dir .= DIRECTORY_SEPARATOR . str_repeat(\"a\", 32);\n}\n$dir .= DIRECTORY_SEPARATOR . str_repeat(\"a\", $need_len - strlen($dir));\nmkdir($dir, 0700, true);\n$fl = $dir . DIRECTORY_SEPARATOR . \"hello.txt\";\nfile_put_contents($fl, \"\");\n$start = substr($dir, 0, strpos($dir, DIRECTORY_SEPARATOR, strlen(__DIR__)+1));\n$iter = new RecursiveIteratorIterator(\n    new RecursiveDirectoryIterator(\n        $start,\n        FilesystemIterator::SKIP_DOTS\n    ),\n    RecursiveIteratorIterator::CHILD_FIRST\n);\nforeach ($iter as $item) {\n    if (!$item->isDir()) {\n        var_dump($item->getPathname());\n    }\n}\n$iter->rewind();\nforeach ($iter as $item) {\n    if ($item->isDir()) {\n        rmdir($item->getPathname());\n    } else {\n        unlink($item->getPathname());\n    }\n}\nrmdir($start);\nvar_dump(file_exists($start));\n/*unlink($fl);\ndo {\n    rmdir($dir);\n    $dir = dirname($dir);\n} while (__DIR__ != $dir);*/\n?>")).toMatchSnapshot();
  });
});
