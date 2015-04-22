#pragma strict
var rb : Rigidbody;

function Start () {
  rb = GetComponent("Rigidbody");

  rb.velocity=new Vector3(0,0,10);
}
