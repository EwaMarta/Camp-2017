const getSummary = (endpoint, containers) => {
    
const balanceContainer = document.querySelector(containers.balance);
const fundsContainer = document.querySelector(containers.funds);
const paymentsContainer = document.querySelector(containers.payments);

$.get("https://efigence-camp.herokuapp.com/api/"+ endpoint, data =>{
 
  console.log(data);
  const balanceValue = data.content[0].balance; 
  const fundsValue = data.content[0].funds; 
  const paymentsValue = data.content[0].payments; 

  console.log(balanceValue,fundsValue,paymentsValue);
  balanceContainer.innerText = balanceValue;
  fundsContainer.innerText = fundsValue;
  paymentsContainer.innerText = paymentsValue;

});
};

const endpoint = "data/summary";
const containers = {
  balance: "#balance",
  funds: "#funds",
  payments: "#payments"
}

getSummary(endpoint, containers);



/*const getProducts = () => {
  const productsContainer = document.querySelector("#products");

  $.get("https://efigence-camp.herokuapp.com/api/data/products", data => {
    console.log(data);

    const productsList = data.content;
    console.log(productsList);

    const productTemplate = (productData)=> {`
        <div class="wallets">
        <div></div>
        <p>${productData.type} <br> ${productData.amount} <br> ${productData.currency} </p>
        `;
    for (let i=0, l= data.content.length; i<l; i++){
    console.log(i, data.content[i]);
     }}

//productsList.forEach((element, index)=> {
//console.log(`Iteracja: ${index}`, element);
  
});
}

getProducts();
*/


const getProductsData = (endpoint, containerClassName) => {
	$.get('https://efigence-camp.herokuapp.com/api/' + endpoint,
			 (data) => {
		const productsContainer = document.querySelector(containerClassName);
		const productsList = data.content;
		console.log(productsList);

		const productTemplate = (productData) => {
			
			let icon;

			switch(productData.type) {
				case 'Wallet':
					icon = 'icon-wallet';
					break;
				case 'Accounts':
					icon = 'icon-accounts';
					break;
				case 'Funds':
					icon = 'icon-funds';
					break;
				default:
					icon = 'icon-default';
			}
			
		return `
					
        <div class="${productData.type}">
        <div></div>
        <p>${productData.type} <br> ${productData.amount} ${productData.currency} </p>
        


              
						`
		};

		productsList.forEach((element, index) => {

			const template = productTemplate(element);
			productsContainer.insertAdjacentHTML('beforeend', template);
		});
});
}
getProductsData('data/products', '.products');

productsContainer.innerHTML(productTemplate);








