const {config} = require("../wdio.shared.conf");

exports.config = {
  ...config,
  capabilities: [
    {
      maxInstances: 5,
      browserName: "firefox",
    },
  ],
};
