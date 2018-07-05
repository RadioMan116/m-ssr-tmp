const smartgrid = require("smart-grid");

const settings = {
  columns: 12,
  offset: "20px",
  container: {
    maxWidth: "1920px",
    fields: "30px"
  },
  breakPoints: {
    ld: {
      width: "1024px",
      fields: "15px"
    },
    m: {
      width: "993px",
      fields: "15px"
    },
    s: {
      width: "933px",
      fields: "15px"
    },

    sm: {
      width: "768px",
      fields: "10px"
    },
    md: {
      width: "730px",
      fields: "5px"
    },
    xs: {
      width: "480px",
      fields: "5px"
    },
    ls: {
      width: "375px",
      fields: "5px"
    },
    xxs: {
      width: "320px",
      fields: "5px"
    }
  },
  oldSizeStyle: false,
  properties: ["justify-content"]
};

smartgrid("./src/precss", settings);
