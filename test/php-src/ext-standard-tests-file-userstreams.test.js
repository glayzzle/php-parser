// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/userstreams.phpt
  it("User-space streams", function () {
    expect(parser.parseCode("<?php\n/* This is a fairly aggressive test that looks at\n * user streams and also gives the seek/gets/buffer\n * layer of streams a thorough testing */\n$lyrics = <<<EOD\n...and the road becomes my bride\nI have stripped of all but pride\nso in her I do confide\nand she keeps me satisfied\ngives me all I need\n...and with dust in throat I crave\nto the game you stay a slave\nrover  wanderer\nnomad  vagabond\ncall me what you will\n   But Ill take my time anywhere\n   Free to speak my mind anywhere\n   and Ill redefine anywhere\n      Anywhere I roam\n      Where I lay my head is home\n...and the earth becomes my throne\nI adapt to the unknown\nunder wandering stars Ive grown\nby myself but not alone\nI ask no one\n...and my ties are severed clean\nthe less I have the more I gain\noff the beaten path I reign\nrover  wanderer\nnomad  vagabond\ncall me what you will\n   But Ill take my time anywhere\n   Free to speak my mind anywhere\n   and Ill never mind anywhere\n      Anywhere I roam\n      Where I lay my head is home\n   But Ill take my time anywhere\n   Free to speak my mind anywhere\n   and Ill take my find anywhere\n      Anywhere I roam\n      Where I lay my head is home\n   carved upon my stone\n   my body lie but still I roam\n      Wherever I may roam.\nWherever I May Roam\nEOD;\n/* repeat the data a few times so that it grows larger than\n * the default cache chunk size and that we have something\n * to seek around... */\n$DATA = \"\";\nfor ($i = 0; $i < 30; $i++) {\n    if ($i % 2 == 0)\n        $DATA .= str_rot13($lyrics);\n    else\n        $DATA .= $lyrics;\n}\n/* store the data in a regular file so that we can compare\n * the results */\n$tf = tmpfile();\nfwrite($tf, $DATA);\n$n = ftell($tf);\nrewind($tf) or die(\"failed to rewind tmp file!\");\nif (ftell($tf) != 0)\n    die(\"tmpfile is not at start!\");\n$DATALEN = strlen($DATA);\nif ($n != $DATALEN)\n    die(\"tmpfile stored $n bytes; should be $DATALEN!\");\nclass uselessstream\n{\n}\nclass mystream\n{\n    public $path;\n    public $mode;\n    public $options;\n    public $position;\n    public $varname;\n    function stream_open($path, $mode, $options, &$opened_path)\n    {\n        $this->path = $path;\n        $this->mode = $mode;\n        $this->options = $options;\n        $split = parse_url($path);\n        $this->varname = $split[\"host\"];\n        if (strchr($mode, 'a'))\n            $this->position = strlen($GLOBALS[$this->varname]);\n        else\n            $this->position = 0;\n        return true;\n    }\n    function stream_read($count)\n    {\n        $ret = substr($GLOBALS[$this->varname], $this->position, $count);\n        $this->position += strlen($ret);\n        return $ret;\n    }\n    function stream_tell()\n    {\n        return $this->position;\n    }\n    function stream_eof()\n    {\n        return $this->position >= strlen($GLOBALS[$this->varname]);\n    }\n    function stream_seek($offset, $whence)\n    {\n        switch($whence) {\n            case SEEK_SET:\n                if ($offset < strlen($GLOBALS[$this->varname]) && $offset >= 0) {\n                    $this->position = $offset;\n                    return true;\n                } else {\n                    return false;\n                }\n                break;\n            case SEEK_CUR:\n                if ($offset >= 0) {\n                    $this->position += $offset;\n                    return true;\n                } else {\n                    return false;\n                }\n                break;\n            case SEEK_END:\n                if (strlen($GLOBALS[$this->varname]) + $offset >= 0) {\n                    $this->position = strlen($GLOBALS[$this->varname]) + $offset;\n                    return true;\n                } else {\n                    return false;\n                }\n                break;\n            default:\n                return false;\n        }\n    }\n}\ntry {\n    stream_wrapper_register(\"bogus\", \"class_not_exist\");\n    die(\"Registered a non-existent class!!!???\");\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Not Registered\\n\";\nif (!stream_wrapper_register(\"test\", \"mystream\")) {\n    die(\"test wrapper registration failed\");\n}\necho \"Registered\\n\";\nif (!stream_wrapper_register(\"bogon\", \"uselessstream\")) {\n    die(\"bogon wrapper registration failed\");\n}\necho \"Registered\\n\";\n$b = @fopen(\"bogon://url\", \"rb\");\nif (is_resource($b)) {\n    die(\"Opened a bogon??\");\n}\n$fp = fopen(\"test://DATA\", \"rb\");\nif (!$fp || !is_resource($fp)) {\n    die(\"Failed to open resource\");\n}\n/* some default seeks that will cause buffer/cache misses */\n$seeks = array(\n    array(SEEK_SET, 0, 0),\n    array(SEEK_CUR, 8450, 8450),\n    array(SEEK_CUR, -7904, 546),\n    array(SEEK_CUR, 12456, 13002),\n    /* end up at BOF so that randomly generated seek offsets\n     * below will know where they are supposed to be */\n    array(SEEK_SET, 0, 0)\n);\n$whence_map = array(\n    SEEK_CUR,\n    SEEK_SET,\n    SEEK_END\n);\n$whence_names = array(\n    SEEK_CUR => \"SEEK_CUR\",\n    SEEK_SET => \"SEEK_SET\",\n    SEEK_END => \"SEEK_END\"\n    );\n/* generate some random seek offsets */\n$position = 0;\nfor ($i = 0; $i < 256; $i++) {\n    $whence = $whence_map[array_rand($whence_map, 1)];\n    switch($whence) {\n        case SEEK_SET:\n            $offset = rand(0, $DATALEN - 1);\n            $position = $offset;\n            break;\n        case SEEK_END:\n            $offset = -rand(0, $DATALEN - 1);\n            $position = $DATALEN + $offset;\n            break;\n        case SEEK_CUR:\n            $offset = rand(0, $DATALEN - 1);\n            $offset -= $position;\n            $position += $offset;\n            break;\n    }\n    $seeks[] = array($whence, $offset, $position);\n}\n/* we compare the results of fgets using differing line lengths to\n * test the fgets layer also */\n$line_lengths = array(1024, 256, 64, 16);\n$fail_count = 0;\nob_start();\nforeach($line_lengths as $line_length) {\n    /* now compare the real stream with the user stream */\n    $j = 0;\n    rewind($tf);\n    rewind($fp);\n    foreach($seeks as $seekdata) {\n        list($whence, $offset, $position) = $seekdata;\n        $rpb = ftell($tf);\n        $rr = (int)fseek($tf, $offset, $whence);\n        $rpa = ftell($tf);\n        $rline = fgets($tf, $line_length);\n        (int)fseek($tf, - strlen($rline), SEEK_CUR);\n        $upb = ftell($fp);\n        $ur = (int)fseek($fp, $offset, $whence);\n        $upa = ftell($fp);\n        $uline = fgets($fp, $line_length);\n        (int)fseek($fp, - strlen($uline), SEEK_CUR);\n        printf(\"\\n--[%d] whence=%s offset=%d line_length=%d position_should_be=%d --\\n\",\n            $j, $whence_names[$whence], $offset, $line_length, $position);\n        printf(\"REAL: pos=(%d,%d,%d) ret=%d line[%d]=`%s'\\n\", $rpb, $rpa, ftell($tf), $rr, strlen($rline), $rline);\n        printf(\"USER: pos=(%d,%d,%d) ret=%d line[%d]=`%s'\\n\", $upb, $upa, ftell($fp), $ur, strlen($uline), $uline);\n        if ($rr != $ur || $rline != $uline || $rpa != $position || $upa != $position) {\n            $fail_count++;\n            echo \"###################################### FAIL!\\n\";\n            $dat = stream_get_meta_data($fp);\n            var_dump($dat);\n            break;\n        }\n        $j++;\n    }\n    if ($fail_count)\n        break;\n}\nif ($fail_count == 0) {\n    ob_end_clean();\n    echo \"SEEK: OK\\n\";\n} else {\n    echo \"SEEK: FAIL\\n\";\n    ob_end_flush();\n}\n$fail_count = 0;\nfseek($fp, $DATALEN / 2, SEEK_SET);\nfseek($tf, $DATALEN / 2, SEEK_SET);\nif (ftell($fp) != ftell($tf)) {\n    echo \"SEEK: positions do not match!\\n\";\n}\n$n = 0;\nwhile(!feof($fp)) {\n    $uline = fgets($fp, 1024);\n    $rline = fgets($tf, 1024);\n    if ($uline != $rline) {\n        echo \"FGETS: FAIL\\niter=$n user=$uline [pos=\" . ftell($fp) . \"]\\nreal=$rline [pos=\" . ftell($tf) . \"]\\n\";\n        $fail_count++;\n        break;\n    }\n}\nif ($fail_count == 0) {\n    echo \"FGETS: OK\\n\";\n}\n/* One final test to see if the position is respected when opened for append */\n$fp = fopen(\"test://lyrics\", \"a+\");\nrewind($fp);\nvar_dump(ftell($fp));\n$data = fgets($fp);\nfclose($fp);\necho $data . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
