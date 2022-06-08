// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug75273.phpt
  it("Bug #75273 (php_zlib_inflate_filter() may not update bytes_consumed)", function () {
    expect(parser.parseCode("<?php\nfunction non_repeating_str($len = 8192) {\n    $ret = '';\n    mt_srand(1);\n    $iterations = (int) ($len / 256) + 1;\n    for ($i = 0; $i < $iterations; $i++) {\n        $haves = array();\n        $cnt = 0;\n        while ($cnt < 256) {\n            $j = mt_rand(0, 255);\n            if (!isset($haves[$j])) {\n                $haves[$j] = $j;\n                $cnt++;\n                $ret .= chr($j);\n            }\n        }\n    }\n    return substr($ret, 0, $len);\n}\n$base_len = 32768 - 23 /*overhead*/;\n$stream = fopen('php://memory', 'rb+');\nfor ($i = 1; $i <= 8; $i++) {\n    $in_data = non_repeating_str($base_len + $i);\n    $deflate_filter = stream_filter_append($stream, 'zlib.deflate',  STREAM_FILTER_WRITE, ['window' => 16 + 15]);\n    rewind($stream);\n    fwrite($stream, $in_data);\n    stream_filter_remove($deflate_filter);\n    rewind($stream);\n    $out_data = stream_get_contents($stream);\n    $out_data_len = strlen($out_data);\n    $inflate_filter = stream_filter_prepend($stream, 'zlib.inflate',  STREAM_FILTER_WRITE, ['window' => 16 + 15]);\n    rewind($stream);\n    $fwrite_len = fwrite($stream, $out_data);\n    stream_filter_remove($inflate_filter);\n    if ($out_data_len !== $fwrite_len) {\n        echo \"bug i=$i out_data_len=$out_data_len fwrite_len=$fwrite_len\\n\";\n    }\n}\nfclose($stream);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
