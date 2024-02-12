var circuit_dropdown;

var svg_object;

function load_cicuits()
{   
    svg_object = document.getElementById("elan_s4");
    circuit_dropdown = document.getElementById("circuits");
    var circuit_list_items = document.getElementsByTagName("wdgroup:group");
    for (let i=0; i<circuit_list_items.length; i++)
    {
        var option_node = document.createElement("option");
        option_node.setAttribute("value",circuit_list_items[i].attributes.getNamedItem("idref").value);
        option_node.innerText = circuit_list_items[i].attributes.getNamedItem("name").value;
        circuit_dropdown.appendChild(option_node);
    }
}

function change_circuit()
{
    var i = circuit_dropdown.selectedIndex;
    var selected_id = circuit_dropdown.options[i].value;
    
    var g_elements =  svg_object.getElementsByClassName("level-1");
    for (let i=0; i<g_elements.length; i++)
    {
        var current_element = g_elements[i];
        var current_id = current_element.attributes.getNamedItem('id').value;
        
        if (current_id == selected_id)
        {
            document.getElementById(selected_id).setAttribute('visibility', 'visible');
        }
        else
        {
            document.getElementById(current_id).setAttribute('visibility', 'hidden');
        }
        
    }   
}
