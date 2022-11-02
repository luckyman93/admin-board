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

                // var z = (parseFloat(target.getAttribute('data-z')) || 1)
                // var d = (parseFloat(target.getAttribute('data-d')) || 2)

                // update the element's style
                target.style.width = event.rect.width + 'px'
                target.style.height = event.rect.height + 'px'

                // translate when resizing from top or left edges
                x += event.deltaRect.left
                y += event.deltaRect.top

                c += event.deltaRect.bottom
                d += event.deltaRect.right

                // z += event.deltaRect.bottom
                // d += event.deltaRect.right

                target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

                // target.style.transform = 'translate(' + z + 'px,' + d + 'px)'

                target.setAttribute('data-x', x)
                target.setAttribute('data-y', y)
                target.setAttribute('data-c', c)
                target.setAttribute('data-d', d)

                // console.log( document.getElementsByClassName("resize-drag"))
                // let datatX = document.getElementsByClassName("resize-drag").attr('data-x');
                // let datatY = document.getElementsByClassName("resize-drag").attr('data-y');
                // let datatc = document.getElementsByClassName("resize-drag").attr('data-c');
                // let datatz = document.getElementsByClassName("resize-drag").attr('data-d');

                // $('.first').text(Math.round(datatX, 100));
                // $('.second').text(Math.round(datatY, 100));
                // $('.three').text(Math.round(datatc, 100));
                // $('.four').text(Math.round(datatz, 100));

                // console.log(Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height))
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
                    width: 100,
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
                // restriction: 'parent',
                // endOnly: true
            })
        ]
    })