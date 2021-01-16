export const newApp = `
 (function() {
      const c = document.getElementById("myCanvas");
    // c.addEventListener("click", penTool); // fires after mouse left btn is released
    c.addEventListener("mousedown", setLastCoords); // fires before mouse left btn is released
    c.addEventListener("mousemove", freeForm);

    c.addEventListener("touchstart", function (e) {
             var touch = event.changedTouches[0];

    }, false);

    c.addEventListener("touchmove", function (event) {
      /* Prevent scrolling. */
      event.preventDefault();

      var touch = event.touches[0];


          penTool({
        clientX: touch.clientX,
        clientY: touch.clientY
        });
         executeNativeFunction('finishedStroke', {base64DataUrl: c.toDataURL()});

    });

    // c.addEventListener("touchend", function (e) {
    //     var mouseEvent = new MouseEvent("mouseup", {});
    //     c.dispatchEvent(mouseEvent);
    //   }, false);
    //   c.addEventListener("touchmove", function (e) {
    //     var touch = e.touches[0];
    //     var mouseEvent = new MouseEvent("mousemove", {
    //       clientX: touch.clientX,
    //       clientY: touch.clientY
    //     });
    //     c.dispatchEvent(mouseEvent);
    //   }, false);
    //
    //   function getTouchPos(canvasDom, touchEvent) {
    //     var rect = canvasDom.getBoundingClientRect();
    //     return {
    //       x: touchEvent.touches[0].clientX - rect.left,
    //       y: touchEvent.touches[0].clientY - rect.top
    //     };
    //   }


    const ctx = c.getContext("2d");

    function setLastCoords(e) {
        const {x, y} = c.getBoundingClientRect();
        lastX = e.clientX - x;
        lastY = e.clientY - y;
    }

    function freeForm(e) {
        if (e.buttons !== 1) return; // left button is not pushed yet
        penTool(e);
         executeNativeFunction('finishedStroke', {base64DataUrl: c.toDataURL()});
    }

      var finishedStroke = function(base64DataUrl) {
       executeNativeFunction('finishedStroke', {base64DataUrl: base64DataUrl});
    };

    function penTool(e) {
        const {x, y} = c.getBoundingClientRect();
        const newX = e.clientX - x;
        const newY = e.clientY - y;

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(newX, newY);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();

        lastX = newX;
        lastY = newY;
    }

    let lastX = 0;
    let lastY = 0;
}());

`;
