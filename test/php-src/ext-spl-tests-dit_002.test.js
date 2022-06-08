// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dit_002.phpt
  it("SPL: DirectoryIterator defaults", function () {
    expect(parser.parseCode("<?php\n$classes = array(\n    'DirectoryIterator' => 0,\n    'FilesystemIterator' => 1,\n    'RecursiveDirectoryIterator' => 1,\n    'GlobIterator' => 1,\n);\nforeach ($classes as $class => $flags) {\n    echo \"===$class===\\n\";\n    $ref = new ReflectionClass($class);\n    $obj = $ref->newInstance('glob://*');\n    echo get_class($obj->current()) . \"\\n\";\n    if ($flags)\n    {\n        var_dump($obj->getFlags());\n        $flags = array(\n            FilesystemIterator::CURRENT_AS_FILEINFO => 0,\n            FilesystemIterator::CURRENT_AS_SELF     => 0,\n            FilesystemIterator::CURRENT_AS_PATHNAME => 1,\n        );\n        foreach($flags as $flag => $isstring) {\n            $obj->setFlags($flag);\n            $obj->rewind();\n            var_dump($obj->getFlags());\n            if ($isstring) {\n                $val = $obj->current();\n                if (is_string($val)) {\n                    var_dump(true);\n                } else {\n                    var_dump($val);\n                }\n            } else {\n                echo get_class($obj->current()) . \"\\n\";\n            }\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
