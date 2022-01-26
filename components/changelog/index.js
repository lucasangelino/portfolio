import * as React from "react";

export default function ChangeLogBadge() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.headwayapp.co/widget.js";
    document.head.appendChild(script);
    var config = {
      selector: ".changelog-badge",
      account: "yBNaqy",
    };
    script.onload = function () {
      window.Headway.init(config);
    };
  }, []);

  return <span className="changelog_pos" id="headway-badge"></span>;
}
