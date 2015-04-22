#pragma strict
var node : Node;
function Start () {
  transform.position=node.transform.position;
}

function FixedUpdate () {
  var difference = node.next.transform.position-transform.position;
  var direction = difference.normalized;
  var delta = direction*node.speed;
  transform.Translate(delta);
  if(difference.magnitude < node.speed)
    node=node.next;
}