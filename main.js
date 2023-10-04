var vg_1 = "idioms/sphere.json";
var vg_2 = "idioms/bubble2.json"
var vg_3 = "idioms/scatter.json"

// vegaEmbed("#scatter", vg_3).then(function(result){
//     console.log("Scatter loaded");
// }).catch(console.error);

vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    const view = result.view;

    // Initialize the initial rotation value to -180
    let rotationValue = -180;

    // Function to update the rotation parameter
    const updateRotation = () => {
        // Update the parameter value
        view.signal("rotate0", rotationValue);
    
        // Increment the rotation value
        rotationValue += 0.5;
    
        // Reset to -180 when it reaches +180
        if (rotationValue > 180) {
          rotationValue = -180;
        }
      };
    
      // Function to pause the rotation when the mouse enters the frame
      const pauseRotation = () => {
        isMouseOverFrame = true;
      };
    
      // Function to resume the rotation when the mouse leaves the frame
      const resumeRotation = () => {
        isMouseOverFrame = false;
      };
    
      // Add mouseenter and mouseleave event listeners to the Vega view's DOM element
      view.container().addEventListener("mouseenter", pauseRotation);
      view.container().addEventListener("mouseleave", resumeRotation);
    
      // Start the animation
      view.runAsync().then(() => {
        // Use setInterval to continuously update the rotation
        setInterval(() => {
          if (!isMouseOverFrame) {
            updateRotation();
            // Run the view asynchronously to apply the changes
            view.runAsync();
          }
        }, 16); // Adjust the interval (in milliseconds) to control the speed of rotation
      });
}).catch(console.error);

vegaEmbed("#count", vg_2).then(function(result){
    const data = result.view.data('unicorns');
    
    console.log(data.map((d) => d));
}).catch(console.error);