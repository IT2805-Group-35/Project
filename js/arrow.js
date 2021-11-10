const canvas = document.getElementById('arrow');
const context = canvas.getContext('2d');

/* Draws a filled arrow with a border.
The bottom part of the arrow is lined from X0, Y0 (upper, left) to X1, X2 (bottom center) to X2, Y2 (upper, right).
A bezier curve from X2, Y2 to X3, Y3, and X5, Y5 to X0, Y0 connects the lower and upper parts of the arrow.
The upper part of the arrow is lined from X3, Y3 (upper, right) to X4, Y4 (bottom center) to X5, Y5 (upper left).*/

function drawArrow(X0, Y0, X1, Y1, X2, Y2, X3, Y3, X4, Y4, X5, Y5) {
    context.beginPath();
    context.moveTo(X0, Y0);
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineTo(X1, Y1);
    context.lineTo(X2, Y2);
    context.bezierCurveTo(130, 65, 125, 60, X3, Y3);
    context.lineTo(X4, Y4);
    context.lineTo(X5, Y5);
    context.bezierCurveTo(35, 60, 30, 65, X0, Y0);
    context.fillStyle = 'rgba(0, 0, 0, 0.4)';
    context.fill();
}

drawArrow(40, 70, 80, 90, 120, 70, 120, 60, 80, 80, 40, 60);



