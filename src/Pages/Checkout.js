import { useEffect } from "react";

function Checkout() {
  let id = "1100323771019"
  useEffect(() => {
    const exampleCallback = () => {
      console.log("Order complete!");
    };

    const createWidget = () => {
      if (window.EBWidgets) {
        window.EBWidgets.createWidget({
          widgetType: "checkout",
          eventId: id,
          iframeContainerId: "example-widget-trigger",
          iframeContainerHeight: 600,
          onOrderComplete: exampleCallback,
        });
      }
    };

    const script = document.createElement("script");
    script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    script.async = true;

    document.body.appendChild(script);
    script.onload = createWidget;
    document.body.removeChild(script);

    return;
  }, [id]);

  return (
   
      <div class="checkout">
        <div>Hi Caleb</div>
        <div id="example-widget-trigger" />
      </div>
  );
}

export default Checkout;
