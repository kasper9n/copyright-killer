var modalClicked = false;
$("document").ready(function() {

	// Add .active class
	$("nav a").click(function() {
		$(this).addClass("active").siblings().removeClass("active");
	});
	$(".signin-buttons div").click(function() {
		//$(this).addClass("active").siblings().removeClass("active");

	});

	// Open signin modal
	$(".signin-buttons div:contains(Login)").click(function() {
		$(".signin-modal").removeClass("hidden"); //Show modal
		$(".register-form").addClass("hidden"); //Hide register form
		$(".login-tab").addClass("active").siblings().removeClass("active"); //Make only login tab active
	});

	$(".signin-buttons div:contains(Register)").click(function() {
		$(".signin-modal").removeClass("hidden"); //Show modal
		$(".register-tab").addClass("active").siblings().removeClass("active"); //Make only register tab active
	});

	// Change signin modal tab
	$(".login-tab").click(function() {
		$(this).addClass("active").siblings().removeClass("active"); //Make clicked tab active
		$(".login-form").removeClass("hidden").siblings(".signin-form").addClass("hidden");
	})

	$(".register-tab").click(function() {
		$(this).addClass("active").siblings().removeClass("active"); //Make clicked tab active
		$(".register-form").removeClass("hidden").siblings(".signin-form").addClass("hidden");
	})

	// Close signin modal
	$(".signin-modal>div").click(function() {
		modalClicked = true;
	});

	$(".signin-modal").click(function() {
		if(modalClicked == false){
			$(this).addClass("hidden");
			$(".signin-buttons div").removeClass("active");
			modalClicked = false;
		}
		modalClicked = false;
	});

});
