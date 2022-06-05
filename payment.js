class Payment{
    constructor(date, sum, discrebtion, status, form_of_payment, paysDetailes)
    {
        
        this.date = date;
        this.sum = sum;
        this.discrebtion = discrebtion;
        this.status = status;
        this.form_of_payment = form_of_payment;
        this.paysDetailes = paysDetailes;
    }
}
const btn_create = document.getElementById('create');

const form = document.querySelector('form');
form.onsubmit =(e)=>{
    e.preventDefault();
    const formData=new FormData(form);
    const data=Object.fromEntries([...formData.entries()]); 

    const form_of_payment_selected = select.options[select.selectedIndex].value;
    if( form_of_payment_selected === "byCredit"  )
    {
        const div = document.getElementById('aaa');
        const select = document.createElement('select');
        const by_credit = document.createElement('option');
        const by_clearing = document.createElement('option');
        const creditPayment = new PaymentOnCredit();
        select.appendChild(by_credit);
        select.appendChild(by_clearing);
        div.appendChild(select);
        //לפי הבחירה של הoption אני יוצרת את המופע   
    }
    else
    {
        const payment = new Payment(data.date, data.sum, data.discrebtion, data.status, 
            data.form_of_payment, data.paysDetailes );
    }
    paymentsarr.push(payment);
    alert('payment done');
}


class PaymentOnCredit extends Payment{
    constructor(date, sum, discrebtion, status, form_of_payment, paysDetailes, _4numbers)
    {
        super(date, sum, discrebtion, status, form_of_payment, paysDetailes);
        this._4numbers = _4numbers;
    }
}

class Clearing extends PaymentOnCredit{
    constructor(date, sum, discrebtion, status, form_of_payment, paysDetailes, _4numbers, idClearing)
    {
        super(date, sum, discrebtion, status, form_of_payment, paysDetailes, _4numbers);
        this.idClearing = idClearing;
        
    }
}

const paymentsarr=[];

const refund = document.getElementById('refund');
refund.onclick