#pragma strict

function Start () {

}
var thighness=1.8;
function Update () {
  var facing=GameObject.Find("Player").transform.position-transform.position;
  transform.rotation = Quaternion.LookRotation(facing);

  var euler = transform.localRotation.eulerAngles;
  if(euler.x>180)
    euler.x-= 360;
  euler.x/=thighness;
  euler.y=270;
  transform.localRotation = Quaternion.Euler(euler);
}