const list = document.getElementById('infi-list');
	list.addEventListener('scroll', function() {
	  if (list.scrollHeight - list.scrollTop - list.clientHeight < 1) {
		const newItem1 = document.createElement('li');
		newItem1.innerText = `Item ${count}`;
		list.appendChild(newItem1);
		  count++;
		const newItem2 = document.createElement('li');
		newItem2.innerText = `Item ${count}`;
		list.appendChild(newItem2);
		  count++;
	  }
	});

let count = 11;