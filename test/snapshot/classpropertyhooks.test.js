const parser = require("../main");
//
describe("classpropertyhooks", () => {
  it("not supported in php < 8.4", () => {
    expect(() => {
      parser.parseEval(
        `
        class BookViewModel
        {
            public string $credits {
              get => 'mailto:' . $this->email;
            }
        }
        `,
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
      parser.parseEval(
        `
        class BookViewModel
        {
            public string $credits {
              get => 'mailto:' . $this->email;
            }
        }
        `,
        {
          parser: {
            version: "8.4",
          },
        },
      ),
    ).toMatchSnapshot();
  });

  it("getter block", () => {
    expect(
      parser.parseEval(
        `
        class BookViewModel
        {
          public string $credits {
            get {
              'mailto:' . $this->email;
            }
          }
        }
        `,
        {
          parser: {
            version: "8.4",
          },
        },
      ),
    ).toMatchSnapshot();
  });
});
