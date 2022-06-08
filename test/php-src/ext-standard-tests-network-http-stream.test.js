// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/http-stream.phpt
  it("http-stream test", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/../http/server.inc';\n['pid' => $pid, 'uri' => $uri] = http_server([__DIR__.\"/news.rss\"]);\n$d = new DomDocument;\n$e = $d->load(\"$uri/news.rss\");\necho \"ALIVE\\n\";\nhttp_server_kill($pid);")).toMatchSnapshot();
  });
});
