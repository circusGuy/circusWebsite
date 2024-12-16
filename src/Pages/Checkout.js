import { useEffect } from "react";
import '../CSS/checkout.css';
import { useLocation } from 'react-router-dom';


function Checkout() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); 
  const id = queryParams.get('id');

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
        <div id="example-widget-trigger" />
      </div>
  );
}

export default Checkout;
