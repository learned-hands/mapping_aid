# NSMIv2 Mapping Aid
This code powers a tool to help folks create mappings between [NSMIv2](http://taxonomy.legal/) and existing taxonomies. It fuels a custom Google Sheets function, `NSMI_MATCH()`, you can use to help find matches between any set of taxonomy names and descriptions and those in in NSMIv2.

## Here's how it works. 

- Open this [NISMv2 Mapping Starter Sheet](https://docs.google.com/spreadsheets/d/1sZyeCKZ38oz8P22b8szpBcNYPuPEsoArRfgqU8mqo-A/edit) in Google Docs.

- Make a copy of the sheet, placing it in your own Google account. You need to do this because the function is only visible to this sheet. 

![copy](https://learned-hands.github.io/mapping_aid/images/step-2.gif)

- Remove the example text from the sheet.

![remove](https://learned-hands.github.io/mapping_aid/images/step-1.gif)

- Input your own taxonomy names or descriptions.

![input](https://learned-hands.github.io/mapping_aid/images/step0.gif)

- Use the NSMI_MATCH() function to get NSMIv2 codes for a given column by using the function for a single cell then adding it to the cells for an entire column. All you have to do is type `=NSMI_MACTH(A2)`, where `A2` is the cell ID for the content you want to match. You can try to match on item names or descriptions. Assuming you have decriptive names like [NSMIv2](http://taxonomy.legal/), those are probably your best bet. 

![function default](https://learned-hands.github.io/mapping_aid/images/step1.gif)

- If you want, you can add an argument after the cell ID to get a URL that links to a description of the NSMIv2 code. Just add a 1 after the cell ID, (e.g., `=NSMI_MACTH(A2,1)`).

![function with argument](https://learned-hands.github.io/mapping_aid/images/step2.gif)

To be clear, this function only makes a guess. You'll likely have to go through and clean things up, but it's better than starting from scratch.  

Have fun.  
