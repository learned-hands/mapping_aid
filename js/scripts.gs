eval(UrlFetchApp.fetch('https://learned-hands.github.io/mapping_aid/js/word2vec.js').getContentText());
eval(UrlFetchApp.fetch('https://learned-hands.github.io/mapping_aid/js/text2label.js').getContentText());

function NSMI_MATCH(string,url=0) {
  // This function makes use of text2lable to find the best answer
  answer = getNClosestAnswer(1, vectorize(string));
  // getNClosestAnswer allows for the return of multiple labels
  // here we've limited it to one. Additionally, we're filtering by
  // QLabels to apply consistent labels. To allow for multiple instances
  // of the same labels we append a #n to the label. This removes that.
  if (url == 1){
    return "https://taxonomy.legal/term/" + QLabels[answer[0][0]];
  } else {
    return QLabels[answer[0][0]];
  }
}
