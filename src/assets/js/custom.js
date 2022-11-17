import interact from 'interactjs'

interact('.resize-drag')
    .resizable({
        // resize from all edges and corners
        edges: {
            left: true,
            right: true,
            bottom: true,
            top: true
        },

        listeners: {
            move(event) {
                var target = event.target
                var x = (parseFloat(target.getAttribute('data-x')) || 0)
                var y = (parseFloat(target.getAttribute('data-y')) || 0)
                var c = (parseFloat(target.getAttribute('data-c')) || 0)
                var d = (parseFloat(target.getAttribute('data-d')) || 0)

                // update the element's style
                target.style.width = event.rect.width + 'px'
                target.style.height = event.rect.height + 'px'

                // translate when resizing from top or left edges
                x += event.deltaRect.left
                y += event.deltaRect.top

                c += event.deltaRect.bottom
                d += event.deltaRect.right

                target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

                target.setAttribute('data-x', x)
                target.setAttribute('data-y', y)
                target.setAttribute('data-c', c)
                target.setAttribute('data-d', d)

               document.getElementById("ca-la").innerHTML = (122+(x+43)/16).toFixed(6)
               document.getElementById("ca-lo").innerHTML = (45-(y+45)/17).toFixed(6)
               document.getElementById("cb-la").innerHTML = (153+(d-81)/16).toFixed(6)
               document.getElementById("cb-lo").innerHTML = (45-(y+45)/17).toFixed(6)
               document.getElementById("cc-la").innerHTML = (122+(x+43)/16).toFixed(6)
               document.getElementById("cc-lo").innerHTML = (22-(c-123)/17).toFixed(6)
               document.getElementById("cd-la").innerHTML = (153+(d-81)/16).toFixed(6)
               document.getElementById("cd-lo").innerHTML = (22-(c-123)/17).toFixed(6)

               document.getElementById("co-a-la").value = (122+(x+43)/16).toFixed(6)
               document.getElementById("co-a-lo").value = (45-(y+45)/17).toFixed(6)
               document.getElementById("co-b-la").value = (153+(d-81)/16).toFixed(6)
               document.getElementById("co-b-lo").value = (45-(y+45)/17).toFixed(6)
               document.getElementById("co-c-la").value = (122+(x+43)/16).toFixed(6)
               document.getElementById("co-c-lo").value = (22-(c-123)/17).toFixed(6)
               document.getElementById("co-d-la").value = (153+(d-81)/16).toFixed(6)
               document.getElementById("co-d-lo").value = (22-(c-123)/17).toFixed(6)
            }
        },
        modifiers: [
            // keep the edges inside the parent
            interact.modifiers.restrictEdges({
                outer: 'parent'
            }),
            // minimum size
            interact.modifiers.restrictSize({
                min: {
                    width: 50,
                    height: 50
                }
            })
        ],

        inertia: true
    })
    .draggable({
        listeners: {
            move: window.dragMoveListener
        },
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ]
    })