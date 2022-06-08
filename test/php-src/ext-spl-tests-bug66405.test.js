// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug66405.phpt
  it("SPL: RecursiveDirectoryIterator with CURRENT_AS_PATHNAME flag", function () {
    expect(parser.parseCode("<?php\n$td = __DIR__ . '/bug66405';\nmkdir($td);\ntouch($td . '/file1.txt');\ntouch($td . '/file2.md');\nmkdir($td . '/testsubdir');\ntouch($td . '/testsubdir/file3.csv');\nclass Bug66405 extends RecursiveDirectoryIterator\n{\n    public function current(): string|SplFileInfo|FilesystemIterator\n    {\n        $current = parent::current();\n        echo gettype($current) . \" $current\\n\";\n        return $current;\n    }\n    public function getChildren(): RecursiveDirectoryIterator\n    {\n        $children = parent::getChildren();\n        if (is_object($children)) {\n            echo get_class($children) . \" $children\\n\";\n        } else {\n            echo gettype($children) . \" $children\\n\";\n        }\n        return $children;\n    }\n}\n$rdi = new Bug66405($td, FilesystemIterator::CURRENT_AS_PATHNAME | FilesystemIterator::SKIP_DOTS);\n$rii = new RecursiveIteratorIterator($rdi);\nob_start();\nforeach ($rii as $file) {\n    //noop\n}\n$results = explode(\"\\n\", ob_get_clean());\nsort($results);\necho implode(\"\\n\", $results);\n?>")).toMatchSnapshot();
  });
});
