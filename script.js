
var initiate = (function ( )
{	
	this.left = function( e )
	{
		this.acceleration.x -= 1;
	}
	
	this.up = function( e ) 
	{
		this.acceleration.y -= 1;
	}
	
	this.right = function( e )
	{
		this.acceleration.x += 1;
	}
	
	this.down = function( e )
	{
		this.acceleration.y += 1;
	}

	this.keypress = function( e )
	{
		var key = (e.keycode ? e.keycode : e.which);
		console.log( key );
		
		switch( key )
		{
			case 97:
				initiate.left ( e );
				break;
			case 119:
				initiate.up ( e );
				break;
			case 100:
				initiate.right( e );
				break;
			case 115:
				initiate.down( e );
				break;
		}
	}
	
	this.move = function( e )
	{
		if( this.velocity.x != 0 || this.velocity.y != 0 )
		{
			var offset = this.$player.offset( );
			var offset = {
				left: (offset.left + this.velocity.x),
				right: (offset.top + this.velocity.y)
			};
			
			console.log( offset );
		
			this.$player.offset( offset );
		}
	}
	
	this.update = function( e ) 
	{
		this.velocity.x += this.acceleration.x; // * ms
		this.velocity.y += this.acceleration.y;
		this.move( e );
	}
	
	this.draw = function( e ) 
	{
	}
	
	this.interval = function( e ) 
	{
		this.update( e );
		this.draw( e );
	}

	var ctor = function ( )
	{
		this.$player = $( "div.player" );
		

		this.$player.css( "width", "10px" );
		this.$player.css( "height", "10px" );
		this.$player.css( "float", "left" );
		this.$player.css( "background", "#000000" );
		
		this.acceleration = ({
			x: 0,
			y: 0
		});
		
		this.velocity = ({
			x: 0,
			y: 0
		});
	
		$( "body" ).bind( "keypress", this.keypress );
		setInterval( this.interval, 200 );
	}
	
	this.ctor = ctor;
	return this;
})( );

initiate.ctor( );