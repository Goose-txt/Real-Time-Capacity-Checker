planeEl = document.querySelector("a-plane");

var curCap = room.currentCap / room.maxCap

//var outerHeight = outerBox.getAttribute('height')
//var y = (outerHeight - curCap) / 2
var y = (1 - curCap) / 2
y = y - (y * 2) // Sign Reversal
var innerPos = "0 " + String(y) + " 0"

//innerBox.setAttribute('height', curCap)
//innerBox.setAttribute('position', innerPos)

// __________ Outer Box creation__________ 
var outerBoxEl = document.createElement('a-entity');
outerBoxEl.setAttribute('do-something-once-loaded', '');

// Attributes
outerBoxEl.setAttribute('id', "testOuter")
outerBoxEl.setAttribute('geometry', {
    primitive: 'box',
    height: outerBoxSpec.height,
    width: outerBoxSpec.width,
    depth: outerBoxSpec.depth,
    position: "0 0 .25"
});

// Apperance
outerBoxEl.setAttribute('material', {
    color: outerBoxSpec.color,
    wireframe: outerBoxSpec.wireframeEnabled
});

// Position
outerBoxEl.setAttribute('position', {
    x: 0,
    y: 0,
    z: .25
})

// __________ Inner Box creation__________ 
var innerBoxEl = document.createElement('a-entity');
innerBoxEl.setAttribute('do-something-once-loaded', '');

// Attributes
innerBoxEl.setAttribute('geometry', {
    primitive: 'box',
    height: curCap,
    width: innerBoxSpec.width,
    depth: innerBoxSpec.depth,
    position: "0 0 .25"
});

// Apperance
innerBoxEl.setAttribute('material', {
    color: innerBoxSpec.color,
});

// Position
innerBoxEl.setAttribute('position',
    innerPos
)


// Adding Boxes to the scene
planeEl.appendChild(outerBoxEl);
testOuter.appendChild(innerBoxEl);