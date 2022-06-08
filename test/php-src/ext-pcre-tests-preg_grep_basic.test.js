// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_grep_basic.phpt
  it("Test preg_grep() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/pcre/php_pcre.c\n*/\n$array = array('HTTP://WWW.EXAMPLE.COM', '/index.html', '/info/stat/', 'http://test.uk.com/index/html', '/display/dept.php');\nvar_dump($array);\nvar_dump(preg_grep('@^HTTP(.*?)\\w{2,}$@i', $array)); //finds a string starting with http (regardless of case) (matches two)\nvar_dump(preg_grep('@(/\\w+\\.*/*)+@', $array)); //finds / followed by one or more of a-z, A-Z and 0-9, followed by zero or more . followed by zero or more / all more than once. (matches all)\nvar_dump(preg_grep('@^http://[^w]{3}.*$@i', $array)); //finds http:// (at the beginning of a string) not followed by 3 characters that aren't w's then anything to the end of the sttring (matches one)\nvar_dump(preg_grep('@.*?\\.co\\.uk$@i', $array)); //finds any address ending in .co.uk (matches none)\nvar_dump(preg_grep('@^HTTP(.*?)\\w{2,}$@i', $array, PREG_GREP_INVERT)); //same as first example but the array created contains everything that is NOT matched but the regex (matches three)\n?>")).toMatchSnapshot();
  });
});
