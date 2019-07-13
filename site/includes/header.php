<header>
	<div class="logo-div">
		<a href="#"><img src="resources/logo.png"/></a>
	</div>
	<nav>
		<a href="#" class="header-link">Home</a>
		<a href="#" class="header-link">Labels</a>
		<a href="#" class="header-link">Artists</a>
		<a href="#" class="header-link">Releases</a>
		<a href="#" class="header-link">Playlists</a>
	</nav>
		<div class="signin-buttons">
			<div class="header-link" data-type="login">Login</div>
			<div class="header-link" data-type="Register">Register</div>
		</div>
</header>

<div class="signin-modal"> <!-- Add .hidden -->
	<div>
		<header>
			<div class="login-tab header-link active">Login</div>
			<div class="register-tab header-link">Register</div>
		</header>
		<main>
			<form class="signin-form login-form">
					<div class="spacer"></div>
					<div class="spacer"></div>
				<p>Welcome back, bruh!</p>
					<div class="spacer"></div>
					<div class="spacer"></div>
				<input placeholder="Email" maxlength="100">
					<div class="spacer"></div>
				<input placeholder="Password" maxlength="100" type="password">
					<div class="spacer"></div>
				<div>
				<input type="submit" name="submit" value="Log in">
				</div>
					<div class="spacer"></div>
			</form>
			<form class="signin-form register-form hidden">
				<p>Join the dark side</p>
			</form>
		</main>
	</div>
</div>
