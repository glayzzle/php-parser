const parser = require("../main");
//
describe("classpropertyhooks", () => {
  const test_parser = parser.create({
    parser: {
      version: "8.4",
    },
  });

  it("not supported in php < 8.4", () => {
    expect(() => {
      parser.parseEval(
        `class BookViewModel {
            public string $credits {
              get => 'mailto:' . $this->email;
            }
        }`,
        {
          parser: {
            version: "8.3",
          },
        },
      );
    }).toThrowErrorMatchingSnapshot();
  });

  it("getter arrow function", () => {
    expect(
      test_parser.parseEval(
        `class BookViewModel {
            public string $credits {
              get => 'mailto:' . $this->email;
            }
        }`,
      ),
    ).toMatchSnapshot();
  });

  it("getter block", () => {
    expect(
      test_parser.parseEval(
        `class BookViewModel {
          public string $credits {
            get {
              'mailto:' . $this->email;
            }
          }
        }`,
      ),
    ).toMatchSnapshot();
  });
});
