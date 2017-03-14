#pragma strict

private var rb:Rigidbody2D;
private var animController:Animator; //animatino controller to get the jump
private var sprite:SpriteRenderer;
private var alreadyJumped:boolean = false;
//private var leftLimiter:GameObject;
//private var rightLimiter:GameObject;

public var jumpHeight:int = 10;
public var acceleration:float = 0.1;
public var airAcceleration:float = 0.1;
public var startSpeed:float = 2;
public var maxSpeed:float = 5;

private var jump:AudioSource;
private var die:AudioSource;
private var hurt:AudioSource;

function Start () {
//change the players position
	rb = gameObject.GetComponent(Rigidbody2D);
	//leftLimiter = gameObject.GetComponent(Rigidbody2D);
	//Debug.Log("Hate this headache");
	//rb.velocity.x = startSpeed;
	animController = this.GetComponent(Animator);
	//when he's grounded tell the animation controller 
	animController.SetBool("alive", true);
	animController.SetBool("grounded", true);
	animController.SetBool("hit", false);

	sprite = this.GetComponent(SpriteRenderer);

	var aSources = GetComponents(AudioSource); 
	jump = aSources[0]; //Jump
	die = aSources[1]; //Die
	hurt = aSources[2]; //Hurt
}

function FixedUpdate () {
	//if moving
	if ( Input.GetAxis("Horizontal") != 0){
     	animController.SetBool("moving", true);
	}else{
		animController.SetBool("moving", false);
	}
//rb.velocity.x = rb.velocity.x + acceleration; //or +=acceleration

	var frontFootRay:Vector3 = transform.position;
	frontFootRay.x += 0.5;
	frontFootRay.y -= 1.1;
	var backFootRay:Vector3 = transform.position;
	backFootRay.x -= 0.3;
	backFootRay.y -= 1.1;
//
	Debug.DrawRay(frontFootRay, Vector2.down * 0.01, Color.green, 1);
	Debug.DrawRay(backFootRay, Vector2.down * 0.01, Color.red, 1);

	//gets the position of mario

	var frontFootHit:RaycastHit2D = Physics2D.Raycast( frontFootRay, Vector2.down, 0.03);
	var backFootHit:RaycastHit2D = Physics2D.Raycast( backFootRay, Vector2.down, 0.03);

	//Debug.Log( hit.collider);
	//JUMP
	if ( !alreadyJumped && Input.GetAxis("Vertical") > 0 && (frontFootHit.collider || backFootHit.collider)){
		rb.velocity.y = jumpHeight;
		alreadyJumped = true;

		//Jump sound
		jump.Play();
	}
	if ( Input.GetAxis("Vertical") == 0 ){
		alreadyJumped = false;
	}

	//right
	if ( Input.GetAxis("Horizontal") > 0){
		//Debug.Log("right/left");
		sprite.flipX = false;
		if (rb.velocity.x < maxSpeed){
			if(frontFootHit.collider || backFootHit.collider){
				rb.velocity.x = rb.velocity.x + acceleration;
			} else{
				rb.velocity.x = rb.velocity.x + airAcceleration;
			}
		}
	} else if ( Input.GetAxis("Horizontal") < 0){//left
		//Debug.Log("right/left");
		sprite.flipX = true;
		if (rb.velocity.x > -maxSpeed){
			if(frontFootHit.collider || backFootHit.collider){
				rb.velocity.x = rb.velocity.x - acceleration;
			}else{
				rb.velocity.x = rb.velocity.x - airAcceleration;
			}
		}
	} 
//else{
//		rb.velocity.x =
//	}

     //if the raycast hits something
     if (frontFootHit.collider) {
//     	Debug.Log("change to grounded");
     	animController.SetBool("grounded", true);
     }else{
//     	Debug.Log("change to not grounded");
     	animController.SetBool("grounded", false);
     }

}

function OnCollisionEnter2D(other:Collision2D){
	if(other.gameObject.tag == "Baddie"){
		var rb:Rigidbody2D = other.gameObject.GetComponent("Rigidbody2D");
		//var rbBaddie:Rigidbody2d = 
		animController.SetBool("hit", true);
		yield WaitForSeconds(0.25);
		animController.SetBool("hit", false);
		hurt.Play();
	}
}
//yield WaitForSeconds(5);
//FixedUpdate() alternate to Update, can crash