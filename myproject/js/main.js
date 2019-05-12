// Гречка
function grechkaBegin(){
	const containerCalculator = document.querySelector('#container')
	const marcup = `
	<div  id="myModal">
	<div class="calculator">
	<div class="base">
	<span id="close" onclick="modalClose()">&times;</span>
	<div class="name">Гречка</div>
	<p>Введите массу продукта</p>
	<div class="write">
	<input type="number" id="inp"><span>(гр.)</span>
	<div class="send" id="grechkaResult">Рассчитать</div>
	</div>
	</div>
	<div class="result">
	<div class="protein">
	<div class="result__name">Белки</div>
	<div id="result__protein"></div>
	</div>
	<div class="fats">
	<div class="result__name">Жиры</div>
	<div id="result__fats"></div>
	</div>
	<div class="calories">
	<div class="result__name">Ккалории</div>
	<div id="result__calories"></div>
	</div>
	</div>
	</div>
	</div>
	`
	containerCalculator.insertAdjacentHTML('beforeend', marcup)
	document.querySelector('#myModal').style.display = "block"

	document.querySelector('#grechkaResult').onclick = function(){
		const inp = document.querySelector('#inp').value

		if(inp > 0){
			let protein = document.querySelector('#result__protein')
			protein.innerHTML = ('beforeend', (inp * 0.126).toFixed(1) + ' г')


			let fats = document.querySelector('#result__fats')
			fats.innerHTML = ('beforeend', (inp * 0.026).toFixed(1) + ' г')


			let calories = document.querySelector('#result__calories')
			calories.innerHTML = ('beforeend', (inp * 3.29).toFixed() + ' ккал')
		}
	}
}


// Рис
function risBegin(){
	const containerCalculator = document.querySelector('#container')
	const marcup = `
	<div  id="myModal">
	<div class="calculator">
	<div class="base">
	<span id="close" onclick="modalClose()">&times;</span>
	<div class="name">Рис</div>
	<p>Введите массу продукта</p>
	<div class="write">
	<input type="number" id="inp"><span>(гр.)</span>
	<div class="send" id="MyResult">Рассчитать</div>
	</div>
	</div>
	<div class="result">
	<div class="protein">
	<div class="result__name">Белки</div>
	<div id="result__protein"></div>
	</div>
	<div class="fats">
	<div class="result__name">Жиры</div>
	<div id="result__fats"></div>
	</div>
	<div class="calories">
	<div class="result__name">Ккалории</div>
	<div id="result__calories"></div>
	</div>
	</div>
	</div>
	</div>`

	containerCalculator.insertAdjacentHTML('beforeend', marcup)
	document.querySelector('#myModal').style.display = "block"

	document.querySelector('#MyResult').onclick = function(){
		const inp = document.querySelector('#inp').value

		if(inp > 0){
			let protein = document.querySelector('#result__protein')
			protein.innerHTML = ('beforeend', (inp * 0.07).toFixed(1) + ' г')


			let fats = document.querySelector('#result__fats')
			fats.innerHTML = ('beforeend', (inp * 0.006).toFixed(1) + ' г')


			let calories = document.querySelector('#result__calories')
			calories.innerHTML = ('beforeend', (inp * 3.23).toFixed() + ' ккал')
		}
	}
}


//Овсянка
function ovsiankaBegin(){
	const containerCalculator = document.querySelector('#container')
	const marcup = `
	<div  id="myModal">
	<div class="calculator">
	<div class="base">
	<span id="close" onclick="modalClose()">&times;</span>
	<div class="name">Овсянка</div>
	<p>Введите массу продукта</p>
	<div class="write">
	<input type="number" id="inp"><span>(гр.)</span>
	<div class="send" id="MyResult">Рассчитать</div>
	</div>
	</div>
	<div class="result">
	<div class="protein">
	<div class="result__name">Белки</div>
	<div id="result__protein"></div>
	</div>
	<div class="fats">
	<div class="result__name">Жиры</div>
	<div id="result__fats"></div>
	</div>
	<div class="calories">
	<div class="result__name">Ккалории</div>
	<div id="result__calories"></div>
	</div>
	</div>
	</div>
	</div>`

	containerCalculator.insertAdjacentHTML('beforeend', marcup)
	document.querySelector('#myModal').style.display = "block"

	document.querySelector('#MyResult').onclick = function(){
		const inp = document.querySelector('#inp').value

		if(inp > 0){
			let protein = document.querySelector('#result__protein')
			protein.innerHTML = ('beforeend', (inp * 0.119).toFixed(1) + ' г')


			let fats = document.querySelector('#result__fats')
			fats.innerHTML = ('beforeend', (inp * 0.0058).toFixed(1) + ' г')


			let calories = document.querySelector('#result__calories')
			calories.innerHTML = ('beforeend', (inp * 3.45).toFixed() + ' ккал')
		}
	}
}


// Пшено
function pshenoBegin(){
	const containerCalculator = document.querySelector('#container')
	const marcup = `
	<div  id="myModal">
	<div class="calculator">
	<div class="base">
	<span id="close" onclick="modalClose()">&times;</span>
	<div class="name">Пшено</div>
	<p>Введите массу продукта</p>
	<div class="write">
	<input type="number" id="inp"><span>(гр.)</span>
	<div class="send" id="MyResult">Рассчитать</div>
	</div>
	</div>
	<div class="result">
	<div class="protein">
	<div class="result__name">Белки</div>
	<div id="result__protein"></div>
	</div>
	<div class="fats">
	<div class="result__name">Жиры</div>
	<div id="result__fats"></div>
	</div>
	<div class="calories">
	<div class="result__name">Ккалории</div>
	<div id="result__calories"></div>
	</div>
	</div>
	</div>
	</div>`

	containerCalculator.insertAdjacentHTML('beforeend', marcup)
	document.querySelector('#myModal').style.display = "block"

	document.querySelector('#MyResult').onclick = function(){
		const inp = document.querySelector('#inp').value

		if(inp > 0){
			let protein = document.querySelector('#result__protein')
			protein.innerHTML = ('beforeend', (inp * 0.07).toFixed(1) + ' г')


			let fats = document.querySelector('#result__fats')
			fats.innerHTML = ('beforeend', (inp * 0.006).toFixed(1) + ' г')


			let calories = document.querySelector('#result__calories')
			calories.innerHTML = ('beforeend', (inp * 3.23).toFixed() + ' ккал')
		}
	}
}


// Творог
function tvorogBegin(){
	const containerCalculator = document.querySelector('#container')
	const marcup = `
	<div  id="myModal">
	<div class="calculator">
	<div class="base">
	<span id="close" onclick="modalClose()">&times;</span>
	<div class="name">Творог</div>
	<p>Введите массу продукта</p>
	<div class="write">
	<input type="number" id="inp"><span>(гр.)</span>
	<div class="send" id="MyResult">Рассчитать</div>
	</div>
	</div>
	<div class="result">
	<div class="protein">
	<div class="result__name">Белки</div>
	<div id="result__protein"></div>
	</div>
	<div class="fats">
	<div class="result__name">Жиры</div>
	<div id="result__fats"></div>
	</div>
	<div class="calories">
	<div class="result__name">Ккалории</div>
	<div id="result__calories"></div>
	</div>
	</div>
	</div>
	</div>`

	containerCalculator.insertAdjacentHTML('beforeend', marcup)
	document.querySelector('#myModal').style.display = "block"

	document.querySelector('#MyResult').onclick = function(){
		const inp = document.querySelector('#inp').value

		if(inp > 0){
			let protein = document.querySelector('#result__protein')
			protein.innerHTML = ('beforeend', (inp * 0.167).toFixed(1) + ' г')


			let fats = document.querySelector('#result__fats')
			fats.innerHTML = ('beforeend', (inp * 0.09).toFixed(1) + ' г')


			let calories = document.querySelector('#result__calories')
			calories.innerHTML = ('beforeend', (inp *1.56).toFixed() + ' ккал')
		}
	}
}


// Макароны
function makaronuBegin(){
	const containerCalculator = document.querySelector('#container')
	const marcup = `
	<div  id="myModal">
	<div class="calculator">
	<div class="base">
	<span id="close" onclick="modalClose()">&times;</span>
	<div class="name">Макароны</div>
	<p>Введите массу продукта</p>
	<div class="write">
	<input type="number" id="inp"><span>(гр.)</span>
	<div class="send" id="MyResult">Рассчитать</div>
	</div>
	</div>
	<div class="result">
	<div class="protein">
	<div class="result__name">Белки</div>
	<div id="result__protein"></div>
	</div>
	<div class="fats">
	<div class="result__name">Жиры</div>
	<div id="result__fats"></div>
	</div>
	<div class="calories">
	<div class="result__name">Ккалории</div>
	<div id="result__calories"></div>
	</div>
	</div>
	</div>
	</div>`

	containerCalculator.insertAdjacentHTML('beforeend', marcup)
	document.querySelector('#myModal').style.display = "block"

	document.querySelector('#MyResult').onclick = function(){
		const inp = document.querySelector('#inp').value

		if(inp > 0){
			let protein = document.querySelector('#result__protein')
			protein.innerHTML = ('beforeend', (inp * 0.104).toFixed(1) + ' г')


			let fats = document.querySelector('#result__fats')
			fats.innerHTML = ('beforeend', (inp * 0.013).toFixed(1) + ' г')


			let calories = document.querySelector('#result__calories')
			calories.innerHTML = ('beforeend', (inp * 3.37).toFixed() + ' ккал')
		}
	}
}


function modalClose(){
	let modal = document.querySelector('#myModal')
	modal.parentNode.removeChild(modal)
}

window.onclick = function(event) {
	let modal = document.querySelector('#myModal')
	if(event.target == modal){
		modal.parentNode.removeChild(modal)
	}
}
