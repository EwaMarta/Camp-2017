const getSummary = (endpoint, containers) => {

  const balanceContainer = document.querySelector(containers.balance);
  const fundsContainer = document.querySelector(containers.funds);
  const paymentsContainer = document.querySelector(containers.payments);

  $.get("https://efigence-camp.herokuapp.com/api/" + endpoint, data => {

    console.log(data);
    const balanceValue = data.content[0].balance;
    const fundsValue = data.content[0].funds;
    const paymentsValue = data.content[0].payments;

    console.log(balanceValue, fundsValue, paymentsValue);
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

// products

const getProductsData = (endpoint, containerClassName) => {
  $.get('https://efigence-camp.herokuapp.com/api/' + endpoint,
    (data) => {
      const productsContainer = document.querySelector(containerClassName);
      const productsList = data.content;
      console.log(productsList);

      const productTemplate = (productData) => {

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

//productsContainer.innerHTML(productTemplate);

// history

const getHistoryData = (endpoint, containerClassName) => {
  $.get('https://efigence-camp.herokuapp.com/api/' + endpoint,
    (data) => {
      const historyContainer = document.querySelector(containerClassName);
      const historyList = data.content;
      console.log(historyList);

      const historyTemplate = (historyData) => {

        return `
				
            <div class="step">
            <div class="row">
                <div  class="column small-3">
                  <p> ${historyData.date} </p>  
                </div>
                <div  class="column small-6">
                  <p> ${historyData.description} </p>  
                </div>
                <div  class="column small-3">
                    <div class="${historyData.status} currency">
                      <p><span>${historyData.amount}</span> ${historyData.currency} </p>  
                    </div>
                </div>
                </div>
            </div>   
         
        `
      };

      historyList.forEach((element, index) => {

        const template = historyTemplate(element);
        historyContainer.insertAdjacentHTML('beforeend', template);
      });
    



  });

};

getHistoryData('data/history','.history')



