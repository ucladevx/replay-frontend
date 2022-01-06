import React from 'react';

export function Location() {
    var coords;
    if (navigator.geolocation) {
        /*navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
                if (result.state === "granted") {
                    console.log(result.state);
                    coords = navigator.geolocation.getCurrentPosition(showPosition);
                  } else if (result.state === "prompt") {
                    console.log(result.state);
                  } else if (result.state === "denied") {
                    //If denied then you have to show instructions to enable location
                  }
                  result.onchange = function () {
                    console.log(result.state);
                  };
            });*/
        coords = navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Sorry not available!");
    }

    return coords;
}

function showPosition(position) {
    return position.coords;
}
