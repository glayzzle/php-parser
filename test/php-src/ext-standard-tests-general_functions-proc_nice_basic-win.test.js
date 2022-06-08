// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/proc_nice_basic-win.phpt
  it("proc_nice() basic behaviour", function () {
    expect(parser.parseCode("<?php\nfunction get_priority_from_wmic() {\n    static $bin, $pid;\n    if (!$bin) {\n        $t \t= explode('\\\\', PHP_BINARY);\n        $bin\t= end($t);\n        $pid\t= getmypid();\n    }\n    $t = '';\n    $p = popen('wmic process where name=\"' . $bin . '\"', 'r');\n    if (!$p) {\n        return false;\n    }\n    while(!feof($p)) {\n        $t .= fread($p, 1024);\n    }\n    pclose($p);\n    $t = explode(PHP_EOL, $t);\n    $f = false;\n    $m = [\n        strpos($t[0], ' ProcessId' ),\n        strpos($t[0], ' Priority ')\n        ];\n    foreach ($t as $n => $l) {\n        if (!$n || empty($l)) {\n            continue;\n        }\n        $d = [];\n        foreach ($m as $c) {\n            $d[] = (int) substr($l, $c + 1, strpos($l, ' ', $c + 2) - ($c + 1));\n        }\n        if ($d[0] === $pid) {\n            return $d[1];\n        }\n    }\n    return false;\n}\n$p = [\n    /* '<verbose name>' => ['<wmic value>', '<proc_nice value>'] */\n    'Idle' \t\t=> [4, 10],\n    'Below normal'\t=> [6, 5],\n    'Normal'\t=> [8, 0],\n    'Above normal'\t=> [10, -5],\n    'High priority'\t=> [13, -10]\n    ];\nforeach ($p as $test => $data) {\n    printf('Testing \\'%s\\' (%d): ', $test, $data[1]);\n    proc_nice($data[1]);\n    print (($wp = get_priority_from_wmic()) === $data[0] ? 'Passed' : 'Failed (' . $wp . ')') . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
