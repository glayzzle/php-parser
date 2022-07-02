// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities17.phpt
  it("htmlentities() / html_entity_decode() #8592 - #9002 table test", function () {
    expect(parser.parseCode("<?php\n$tests = array(\n    array(8853, '&oplus;',  \"e28a95\"),\n    array(8855, '&otimes;', \"e28a97\"),\n    array(8869, '&perp;',   \"e28aa5\"),\n    array(8901, '&sdot;',   \"e28b85\"),\n    array(8968, '&lceil;',  \"e28c88\"),\n    array(8969, '&rceil;',  \"e28c89\"),\n    array(8970, '&lfloor;', \"e28c8a\"),\n    array(8971, '&rfloor;', \"e28c8b\"),\n    array(9001, '&lang;',   \"e28ca9\"),\n    array(9002, '&rang;',   \"e28caa\")\n);\nforeach ($tests as $test) {\n    var_dump(htmlentities(pack('H*', $test[2]), ENT_QUOTES, 'UTF-8'));\n}\nforeach ($tests as $test) {\n    list(,$result) = unpack('H6', html_entity_decode($test[1], ENT_QUOTES, 'UTF-8'));\n    var_dump($result);\n}\n?>")).toMatchSnapshot();
  });
});
