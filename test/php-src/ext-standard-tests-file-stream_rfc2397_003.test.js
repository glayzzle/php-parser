// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stream_rfc2397_003.phpt
  it("Stream: RFC2397 decoding data", function () {
    expect(parser.parseCode("<?php\n$streams = array(\n    'data://,A%20brief%20note',\n    'data://application/vnd-xxx-query,select_vcount,fcol_from_fieldtable/local',\n    'data://;base64,Zm9vYmFyIGZvb2Jhcg==',\n    'stream_rfc2397_003.gif' => 'data://image/gif;base64,R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAw\nAAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFz\nByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSp\na/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJl\nZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uis\nF81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PH\nhhx4dbgYKAAA7',\n    );\nforeach($streams as $original => $stream)\n{\n    if (is_string($original)) {\n        var_dump(file_get_contents(__DIR__ . '/' . $original) == file_get_contents($stream));\n    } else {\n        var_dump(file_get_contents($stream));\n    }\n}\n?>")).toMatchSnapshot();
  });
});
