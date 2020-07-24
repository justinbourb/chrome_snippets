function checkbox(num_boxes) {
    /*  Purpose: creates a list of numbered checkboxes, one per row
        Input: num_boxes an int, how many checkboxes you need
              numbered from 0 to num_boxes
        Usage: check of items as needed
    */
    for (var i = 0; i <= num_boxes; i++) {
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "id";

        var label = document.createElement('label')
        label.htmlFor = "id";
        label.appendChild(document.createTextNode(i));
        label.style.fontSize = "large";

        document.body.appendChild(checkbox);
        document.body.appendChild(label);
        document.body.innerHTML += '<br>';
    }
}
