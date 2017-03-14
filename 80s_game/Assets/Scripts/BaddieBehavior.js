#pragma strict

public var leftLimiter:GameObject;
public var rightLimiter:GameObject;
private var sprite:SpriteRenderer;
private var animController:Animator;
private var rbBaddie:Rigidbody2D;
private var LC:LevelController;
public var damage:int = 25;
//public var player:GameObject;

public var isDead:boolean = false;

public var speed:float = 0.02;

private var direction:int = 1; //1 right -1 left

function Start () {
	var levelControllerGameObject:GameObject = gameObject.Find("Level Controller Game Object"); //find the game object
	LC = levelControllerGameObject.GetComponent("LevelController"); //get script from level controller game object
	sprite = this.GetComponent(SpriteRenderer);
	animController = this.GetComponent(Animator);
}

function Update () {

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
		//var rbBaddie:Rigidbody2d = 
		Debug.Log(rb.velocity.y);
		if (rb.velocity.y > 0.01) {
			animController.SetBool("death", true);
			isDead = true;
			GetComponent.<Rigidbody2D>().simulated = false;

			//Baddy Death Sound 
			var audio: AudioSource = GetComponent.<AudioSource>();
			audio.Play();
		}else{
			direction = -direction;
			LC.hurtPlayer(damage);
			if(sprite.flipX == true){
				sprite.flipX = false;
			} else{
				sprite.flipX = true;
			}
		}

	}
}


//other.gameObject.rigidbody2d.Velocity.y < -1
