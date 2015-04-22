#pragma strict
var watch : Transform;
var range = 10;
function Start () {
  for(var i=0; i<transform.childCount; i++){
    print(i);
    transform.GetChild(i).gameObject.SetActive(false);
  }
}
function Update () {
  var distance = Vector3.Distance(transform.position,watch.position);
  print(distance);
  if(distance<range){
    for(var i=0; i<transform.childCount; i++){
      var child = transform.GetChild(i);
      child.parent=null;
      child.gameObject.SetActive(true);
    }
    gameObject.SetActive(false);
  }
}