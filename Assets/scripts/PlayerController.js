#pragma strict
var maxSpeed=8.0;

var moveSpeed=3.0;
var moveFraction=0.03;

var rollAngle = 0.0;
var pitchAngle = 0.0;

var bulletPrefab : GameObject;

var model : Transform;

var nextShoot=0.0;
var rb : Rigidbody;

function Start () {
  rb = GetComponent("Rigidbody");
  model = transform.Find('model');
}

function FixedUpdate () {
  var translation=new Vector3();

  if(Input.GetAxis('Jump')>0 && nextShoot<Time.fixedTime) {
    nextShoot=Time.fixedTime+0.3;
    var go = GameObject.Instantiate(bulletPrefab,transform.position+Vector3(0,0,1.5),Quaternion.identity);
    go.transform.parent=transform.parent;
  }

  rb.velocity*=0.9;

  translation.x=transform.localPosition.x*-0.1;
  translation.z=Input.GetAxis('Horizontal')*moveFraction;
  translation.y=Input.GetAxis('Vertical')*moveFraction;

  transform.Translate(translation);

  var euler=model.localRotation.eulerAngles;

  rollAngle=Mathf.Clamp(rollAngle+rb.velocity.y+Input.GetAxis('Vertical')*moveSpeed*2,-90,90);
  rollAngle*=0.9;

  pitchAngle=Mathf.Clamp(pitchAngle+rb.velocity.z+Input.GetAxis('Horizontal')*moveSpeed*4,-15,15);
  pitchAngle*=0.9;

  model.localRotation= Quaternion.Euler(pitchAngle,0,rollAngle);
}

//triggerabes
function SpeedUp( ammount : int ){
  ammount=ammount || 1;
  moveSpeed = Mathf.Min(moveSpeed+ammount,maxSpeed);
}

function SpeedDown( ammount : int ){
  ammount=ammount || 1;
  moveSpeed = Mathf.Max(moveSpeed-ammount,1);
}