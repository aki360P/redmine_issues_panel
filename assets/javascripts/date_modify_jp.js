//日付について同じ西暦の場合yyyy/MM/dd→M/dにする。
//"期日まで"の表示を"あと何日"の表示に変える

$(document).ready(function() {
  //年を取得
  var hiduke=new Date();
  var year = hiduke.getFullYear();
  

  $('.start_date .value').each(function(i, elem) {
    //console.log(i + ': ' + $(elem).text());
    date_modify($(elem));
  });

  $('.due_date .value').each(function(i, elem) {
    //console.log(i + ': ' + $(elem).text());
    date_modify($(elem));
  });

  $('.created_on .value').each(function(i, elem) {
    //console.log(i + ': ' + $(elem).text());
    date_modify($(elem));
  });
  
  $('.date .value').each(function(i, elem) {
    //console.log(i + ': ' + $(elem).text());
    date_modify($(elem));
  });

  function date_modify(elem){
    var s = elem.text();

    if (s.indexOf(year) != -1){
      //同年の場合yyyy/MM/dd→M/dにする
      s = s.replace(year,'');
      s = s.replace('/0','/');
      s = s.replace('/0','/');
      s = s.replace('/','');
      
      //あと何日表示にする
      s = s.replace('期日まで','あと');
      
      //要素書き換え
      elem.text(s); 
    }
  }

});
