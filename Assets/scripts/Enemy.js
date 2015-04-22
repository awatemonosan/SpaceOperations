#pragma strict
var forwardSpeed = 5.0;
var accell = 0.05;
var rb : Rigidbody;

function Start () {
  rb = GetComponent("Rigidbody");

  rb.velocity=transform.rotation * new Vector3(0,0,forwardSpeed);
}

function FixedUpdate () {
  var desiredVelocity = transform.rotation * new Vector3(0,0,forwardSpeed);
  rb.velocity=rb.velocity*(1-accell)+desiredVelocity*accell;

  var facing=GameObject.Find("Player").transform.position-transform.position;

  transform.rotation = Quaternion.LookRotation(facing);
}

function OnCollisionEnter() {
  this.enabled=false;
  rb.useGravity=true;
}