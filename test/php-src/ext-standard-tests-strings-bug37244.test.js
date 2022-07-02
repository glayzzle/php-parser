// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug37244.phpt
  it("Bug #37244 (base64_decode violates RFC 3548)", function () {
    expect(parser.parseCode("<?php\n$strings = array(\n    'SW1wbGVtZW50YXRpb25zIE1VU1QgcmVqZWN0IHRoZSBlbmNvZGluZyBpZiBpdCBjb250YWlucyBjaGFyYWN0ZXJzIG91dHNpZGUgdGhlIGJhc2UgYWxwaGFiZXQu',\n    'SW1wbGVtZW$0YXRpb25zIE1VU1QgcmVqZWN0IHRoZSBlbmNvZGluZyBpZiBpdCBjb250YWlucyBjaGFyYWN0ZXJzIG91dHNpZGUgdGhlIGJhc2UgYWxwaGFiZXQu',\n    'SW1wbGVtZW0YXRpb25zIE1VU1QgcmVqZWN0IHRoZSBlbmNvZGluZyBpZiBpdCBjb250YWlucyBjaGFyYWN0ZXJzIG91dHNpZGUgdGhlIGJhc2UgYWxwaGFiZXQu'\n);\nforeach($strings as $string) {\n    var_dump(base64_decode($string, true));\n}\n?>")).toMatchSnapshot();
  });
});
