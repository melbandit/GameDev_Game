#pragma strict

public var leftLimiter:GameObject;
public var rightLimiter:GameObject;
private var sprite:SpriteRenderer;
private var animController:Animator;
//public var player:GameObject;

public var isDead:boolean = false;

public var speed:float = 0.02;

private var direction:int = 1; //1 right -1 left

function Start () {
	sprite = this.GetComponent(SpriteRenderer);
	animController = this.GetComponent(Animator);
}

function Update () {
//	this.transform.position.x += speed * direction;
//
//	if(transform.position.x < leftLimiter.transform.position.x){
//		direction = 1;
//		sprite.flipX = false;
//	} else if(transform.position.x > rightLimiter.transform.position.x){ 
//		direction = -1;
//		sprite.flipX = true;
//	}

	if (!isDead) {
		this.transform.position.x += speed * direction;

		if(transform.position.x < leftLimiter.transform.position.x){
			direction = 1;
			sprite.flipX = false;
		} else if(transform.position.x > rightLimiter.transform.position.x){ 
			direction = -1;
			sprite.flipX = true;
		}
	}
}

function OnCollisionEnter2D(other:Collision2D){
	if(other.gameObject.tag == "Player"){
		var rb:Rigidbody2D = other.gameObject.GetComponent("Rigidbody2D");
		Debug.Log(rb.velocity.y);
		if (rb.velocity.y > 0.01) {
			Debug.Log("player killed baddie!");
			isDead = true;
			animController.SetBool("death", true);
		} else {
//			animController.SetBool("death", false);
		}
	}
}

//other.gameObject.rigidbody2d.Velocity.y < -1
