// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug60602.phpt
  it("Bug #60602 proc_open() modifies environment if it contains arrays", function () {
    expect(parser.parseCode("<?php\n$descs = array(\n    0 => array('pipe', 'r'), // stdin\n    1 => array('pipe', 'w'), // stdout\n    2 => array('pipe', 'w'), // strerr\n);\n$environment = array('test' => array(1, 2, 3));\n$cmd = (substr(PHP_OS, 0, 3) == 'WIN') ? 'dir' : 'ls';\n$p = proc_open($cmd, $descs, $pipes, '.', $environment);\nif (is_resource($p)) {\n    $data = '';\n    while (1) {\n        $w = $e = NULL;\n        $n = stream_select($pipes, $w, $e, 300);\n        if ($n === false) {\n            echo \"no streams \\n\";\n            break;\n        } else if ($n === 0) {\n            echo \"process timed out\\n\";\n            proc_terminate($p, 9);\n            break;\n        } else if ($n > 0) {\n            $line = fread($pipes[1], 8192);\n            if (strlen($line) == 0) {\n                /* EOF */\n                break;\n            }\n            $data .= $line;\n        }\n    }\n    var_dump(strlen($data));\n    $ret = proc_close($p);\n    var_dump($ret);\n    var_dump(is_array($environment['test']));\n} else {\n    echo \"no process\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
