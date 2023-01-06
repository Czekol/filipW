const createSnow = () => {
	const snowFlake = document.createElement('i')
	snowFlake.classList.add('snowflake')
	snowFlake.textContent = '❆'
	snowFlake.style.color = 'snow'

	snowFlake.style.left = Math.random() * window.innerWidth + 'px'
	snowFlake.style.animationDuration = Math.random() * 5 + 3 + 's'
	snowFlake.style.opacity = Math.random()

	document.body.appendChild(snowFlake)

	setTimeout(() => {
		snowFlake.remove()
	}, 8000)
}

setInterval(createSnow, 50)


