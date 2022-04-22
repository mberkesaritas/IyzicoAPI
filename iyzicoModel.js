var Iyzipay = require('iyzipay');

const iyzico = (req,res,next) => {
    const { cardNumber, expireMonth,expireYear, cardHolderName, cvc,registerCard , price , currency} = req.body;
    
    //TODO: Make validation for req.body
    var iyzipay = new Iyzipay({
        apiKey: "sandbox-afXhZPW0MQlE4dCUUlHcEopnMBgXnAZI",
        secretKey: "sandbox-wbwpzKIiplZxI3hh5ALI4FJyAcZKL6kq",
        uri: 'https://sandbox-api.iyzipay.com'
    }
    );

    if(currency == "TL"){
        console.log(currency)
        var request = {
            locale: Iyzipay.LOCALE.TR,
            conversationId: '123456789',
            price: price,
            paidPrice: price ,
            currency: Iyzipay.CURRENCY.TRY,
            installment: '1',
            basketId: 'B67832',
            paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
            paymentGroup: Iyzipay.PAYMENT_GROUP.SUBSCRIPTION,
            paymentCard: {
                cardHolderName,
                cardNumber,
                expireMonth,
                expireYear,
                cvc,
                registerCard,
            },
            buyer: {
                id: 'BY789',
                name: 'John',
                surname: 'Doe',
                gsmNumber: '+905350000000',
                email: 'email@email.com',
                identityNumber: '74300864791',
                lastLoginDate: '2015-10-05 12:43:35',
                registrationDate: '2013-04-21 15:12:09',
                registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                ip: '85.34.78.112',
                city: 'Istanbul',
                country: 'Turkey',
                zipCode: '34732'
            },
            shippingAddress: {
                contactName: 'Jane Doe',
                city: 'Istanbul',
                country: 'Turkey',
                address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                zipCode: '34742'
            },
            billingAddress: {
                contactName: 'Jane Doe',
                city: 'Istanbul',
                country: 'Turkey',
                address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                zipCode: '34742'
            },
            basketItems: [
                {
                    id: 'BI101',
                    name: 'Binocular',
                    category1: 'Collectibles',
                    category2: 'Accessories',
                    itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
                    price: price
                },
                
            ]
        };

    }
    else if (currency == "Euro"){
        console.log(currency)
        var request = {
            locale: Iyzipay.LOCALE.EN,
            conversationId: '123456789',
            price: price,
            paidPrice: price ,
            currency: Iyzipay.CURRENCY.EUR,
            installment: '1',
            basketId: 'B67832',
            paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
            paymentGroup: Iyzipay.PAYMENT_GROUP.SUBSCRIPTION,
            paymentCard: {
                cardHolderName,
                cardNumber,
                expireMonth,
                expireYear,
                cvc,
                registerCard,
            },
            buyer: {
                id: 'BY789',
                name: 'John',
                surname: 'Doe',
                gsmNumber: '+905350000000',
                email: 'email@email.com',
                identityNumber: '74300864791',
                lastLoginDate: '2015-10-05 12:43:35',
                registrationDate: '2013-04-21 15:12:09',
                registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                ip: '85.34.78.112',
                city: 'Istanbul',
                country: 'Turkey',
                zipCode: '34732'
            },
            shippingAddress: {
                contactName: 'Jane Doe',
                city: 'Istanbul',
                country: 'Turkey',
                address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                zipCode: '34742'
            },
            billingAddress: {
                contactName: 'Jane Doe',
                city: 'Istanbul',
                country: 'Turkey',
                address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                zipCode: '34742'
            },
            basketItems: [
                {
                    id: 'BI101',
                    name: 'Binocular',
                    category1: 'Collectibles',
                    category2: 'Accessories',
                    itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
                    price: price
                },
                
            ]
        };
    }

    else{
        console.log(currency)
        var request = {
            locale: Iyzipay.LOCALE.USD,
            conversationId: '123456789',
            price: price,
            paidPrice: price ,
            currency: Iyzipay.CURRENCY.USD,
            installment: '1',
            basketId: 'B67832',
            paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
            paymentGroup: Iyzipay.PAYMENT_GROUP.SUBSCRIPTION,
            paymentCard: {
                cardHolderName,
                cardNumber,
                expireMonth,
                expireYear,
                cvc,
                registerCard,
            },
            buyer: {
                id: 'BY789',
                name: 'John',
                surname: 'Doe',
                gsmNumber: '+905350000000',
                email: 'email@email.com',
                identityNumber: '74300864791',
                lastLoginDate: '2015-10-05 12:43:35',
                registrationDate: '2013-04-21 15:12:09',
                registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                ip: '85.34.78.112',
                city: 'Istanbul',
                country: 'Turkey',
                zipCode: '34732'
            },
            shippingAddress: {
                contactName: 'Jane Doe',
                city: 'Istanbul',
                country: 'Turkey',
                address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                zipCode: '34742'
            },
            billingAddress: {
                contactName: 'Jane Doe',
                city: 'Istanbul',
                country: 'Turkey',
                address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
                zipCode: '34742'
            },
            basketItems: [
                {
                    id: 'BI101',
                    name: 'Binocular',
                    category1: 'Collectibles',
                    category2: 'Accessories',
                    itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
                    price: price
                },
                
            ]
        };
    }
  
    
    iyzipay.payment.create(request, function (err, result) {
        res.status(200).json(result);
    });
}


module.exports = {
    iyzico
}