import React, { useState, useEffect } from 'react'

const Typewriter = props => {
	const [text, setText] = useState('')

	useEffect(() => {
		clicketyClack(
			props.text,
			props.minTypeSpeed,
			props.maxTypeSpeed,
			props.initDelay
		)
	}, [props.text, props.minTypeSpeed, props.maxTypeSpeed, props.initDelay])

	const clicketyClack = (text, minTypeSpeed, maxTypeSpeed, initDelay) => {
		let str = ''
		let typeSpeed = 0

		text.split('').forEach(c => {
			typeSpeed += Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed
			setTimeout(() => {
				str += c
				setText(str)
			}, initDelay + typeSpeed)
		})
	}

	return (
		<div className={props.className}>
			{text}
			<span>&nbsp;</span>
		</div>
	)
}

Typewriter.defaultProps = {
	text: 'Give me something to type!',
	minTypeSpeed: 50,
	maxTypeSpeed: 90,
	initDelay: 700
}

export default Typewriter
