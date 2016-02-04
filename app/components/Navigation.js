import React from 'react'

var Navigation = React.createClass({
  render: function () {
    return (
    <nav>
		<ul>
			<li><a href='/'>Home</a></li>
			<li><a href='/world'>World</a></li>
			<li><a href='/hello'>Hello</a></li>
		</ul>
	</nav>
    )
  }
})

export default Navigation
